// ── Raw API types ────────────────────────────────────────────────────────

type RawField = {
  key: string;
  type: 'field';
  value: string | null;
  items: null;
};

type RawItems = {
  key: string;
  type: 'items';
  value: null;
  items: RawItem[];
};

type RawData = RawField | RawItems;

type RawItem = {
  type: string;
  data: RawData[];
};

type RawBlock = {
  id: string;
  name: string;
  type: string;
  block: RawItem[];
};

// ── Transformed types ─────────────────────────────────────────────────────

// interface instead of type alias — allows self-reference
interface TransformedData {
  [key: string]: string | null | TransformedData | TransformedData[];
}

type TransformedBlock = {
  id: string;
  name: string;
  block: TransformedData;
};

type TransformedResult = Record<string, TransformedBlock>;

// ── Functions ─────────────────────────────────────────────────────────────

function transformData(dataArr: RawData[]): TransformedData {
  return dataArr.reduce<TransformedData>((acc, field) => {
    acc[field.key] = field.items != null
      ? transformItems(field.items)
      : field.value;
    return acc;
  }, {});
}

function transformItems(itemsArr: RawItem[]): TransformedData {
  return itemsArr.reduce<TransformedData>((acc, item) => {
    const { type, data } = item;
    const transformed = transformData(data);
    if (acc[type] !== undefined) {
      if (!Array.isArray(acc[type])) acc[type] = [acc[type] as TransformedData];
      (acc[type] as TransformedData[]).push(transformed);
    } else {
      acc[type] = transformed;
    }
    return acc;
  }, {});
}

export function transformBlock(block: RawBlock): TransformedResult {
  const { id, name, type, block: blockArr } = block;
  return {
    [type]: {
      id,
      name,
      block: transformItems(blockArr),
    },
  };
}