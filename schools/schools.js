const { uuidv4 } = require("../utils");

let schools = new Map();


function addSchool( p_school )
{
    let school = p_school;
    school.id = uuidv4();

    school.set( school.id, school );
}


function getSchoolById( p_id )
{
    return schools.get( p_id );
}


module.exports = {
    addSchool,
    getSchoolById
}