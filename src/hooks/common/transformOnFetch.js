export const transformOnFetch = (data, fields) => {
  console.log('data', data);
  const fieldsToTransform = fields.filter((field) => field.transformOnFetch);
  if (Array.isArray(data)) {
    const transformedData = data.map((row) => {
      const transformedRow = row;
      for (let i = 0; i < fieldsToTransform.length; i++) {
        transformedRow[fieldsToTransform[i].name] =
          fieldsToTransform[i].transformOnFetch(row);
      }
      return transformedRow;
    });
    return transformedData;
  }

  const transformedData = data;
  for (let i = 0; i < fieldsToTransform.length; i++) {
    transformedData[fieldsToTransform[i].name] =
      fieldsToTransform[i].transformOnFetch(data);
  }
  return transformedData;
};
