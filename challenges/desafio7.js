db.produtos
  .find(
    {
      vendidos: { $not: { $eq: 71 } },
      tags: { $exists: false },
    },
    {
      _id: 0,
      nome: 1,
      vendidos: 1,
    },
  );