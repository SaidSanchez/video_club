module.exports = (sequalize, type) => {
    const Copies = sequalize.define('copies', {
        id:{type:type.INTEGER, primaryKey:true, autoIncrement:true},
        number:type.STRING,
        format:type.STRING,
        status:type.STRING
    });
    return Copies;
};
