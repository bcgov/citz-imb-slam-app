export const transformOnSave = (data, callback, fields) => callback(data);

/*
(body, callback) => {
      const transformedBody = {};

      for (let i = 0; i < fields.length; i++) {
        transformedBody[fields[i].name] = body[fields[i].name];

        if (fields[i].transformOnSave)
          transformedBody[fields[i].name] = fields[i].transformOnSave(
            body[fields[i].name],
          );
      }

      return callback(transformedBody);
    };




*/
