module.exports=(sequalize,type) =>{
  const Members =sequalize.define('member',{
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      name: type.STRING,
      lastName: type.STRING,
      addres:type.STRING,
      phone:type.STRING,
      status:type.STRING
  });
  return Members;
};
