const stripFields = (entry) => entry?.fields;

const stripFieldsMap = (entry) =>
  entry?.map((option) => ({
    id: option?.sys?.id,
    fields: option.fields,
  }));

const stripMetaData = (entry) =>
  Array.isArray(entry)
    ? stripFieldsMap(entry)
    : { id: entry?.sys?.id, fields: stripFields(entry) };

module.exports = { stripFields, stripFieldsMap, stripMetaData };
