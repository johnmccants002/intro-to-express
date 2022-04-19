const students = [
    {student: 'John McCants', graduated: false},
    {student: 'Tim Jones', graduated: true},
    {student: 'Lil Wayne', graduated: true}
  ];
  
  module.exports = {
    getAll: function() {
      return students;
    }
  };