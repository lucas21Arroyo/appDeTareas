const tareas = require("./tareas.json"); 

module.exports = {
  listar: function () {
  console.log('*********************TAREAS*********************'.magenta);
    tareas.forEach(({titulo, estado}) => {
      console.log(`${titulo.blue} ---> ${estado}`)
    });
  console.log('***********************************************'.magenta);
  },
};
