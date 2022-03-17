module.exports = (sequalize, type) => {
    const Booking = sequalize.define('bookings', {
        id:{type:type.INTEGER, primaryKey:true, autoIncrement:true},
        date:type.DATE,
        membersId:type.STRING,
        copiesId:type.STRING
    });
    return Booking;
};
