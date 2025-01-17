//SPDX-License-Identifier: Apache-2.0

var exames = require('./controller.js');

module.exports = function(app){

  app.get('/get_patient/:id', function(req, res){
    exames.get_patient(req, res);
  });
  app.get('/add_patient/:patient', function(req, res){
    exames.add_patient(req, res);
  });
  app.get('/get_doctor/:id', function(req, res){
    exames.get_doctor(req, res);
  });
  app.get('/add_doctor/:doctor', function(req, res){
    exames.add_doctor(req, res);
  });
  app.get('/get_all_exames', function(req, res){
    exames.get_all_exames(req, res);
  });
  app.get('/change_holder/:holder', function(req, res){
    exames.change_holder(req, res);
  });
  app.get('/add_doctor_to_patient/:doctor', function(req, res){
    exames.add_doctor_to_patient(req, res);
  });
  app.get('/remove_doctor_from_patient/:doctor', function(req, res){
    exames.remove_doctor_from_patient(req, res);
  });
  app.get('/get_enterprise/:id', function(req, res){
    exames.get_enterprise(req, res);
  });
  app.get('/add_enterprise/:enterprise', function(req, res){
    exames.add_enterprise(req, res);
  });
  app.get('/add_enterprise_to_patient/:enterprise', function(req, res){ 
    exames.add_enterprise_to_patient(req, res); 
  });


}
