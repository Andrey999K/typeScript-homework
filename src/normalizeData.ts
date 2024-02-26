import postsData from "./mock/posts.json";

type UnnormalizedData = {
  id: string,
  title: string,
  body: string
}

type NormalizedData = {
  byId: {
    [id: string]: UnnormalizedData
  },
  allIds: string[]
}

const posts: UnnormalizedData[] = postsData;

const normalizeData = (unnormalizedData: UnnormalizedData[]): NormalizedData => {
  return unnormalizedData.reduce(
    (acc, curr) => {
      return {
        byId: {...acc.byId, [curr.id]: curr},
        allIds: [...acc.allIds, curr.id]
      }
    },
    {
      byId: {},
      allIds: [] as string[]
    }
  )
};

console.log(normalizeData(posts));
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */


