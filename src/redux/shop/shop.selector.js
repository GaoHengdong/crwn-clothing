import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsAsArray = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollectionById = (collectionId) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionId] : null
  );

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoading = createSelector(
  [selectShop],
  (shop) => !!!shop.collections
);
