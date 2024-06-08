const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const port= 3001;

app.use(bodyParser.json());

let socios=[];
let profesores=[];
let deportes=[];

app.get('/',(req,res)=>{
    res.send('Administracion Club');
});

//socios
//post
app.post('/socios',(req,res)=>{
    const socio=req.body;
    socio.nroSocio=socios.length+1;
    console.log('Solicitud POST a /socios recibida');
    socios.push(socio);
    console.log('Array socios: ',socios);
    res.status(201).send(socio);
});

//get por nroSocio
app.get('/socios/:nroSocio',(req,res)=>{
    const nroSocio=parseInt(req.params.nroSocio);
    const socio= socios.find(s=>s.nroSocio===nroSocio);
    console.log('Solicitud GET a /socios recibida');
    if(socio){
        console.log('Array socios: ',socios);
        res.send(socio);
    }else{
        console.log('Socio no encontrado');
        res.status(404).send({message:'Socio no encontrado'});
    }
});

//get de todos los socios
app.get('/socios', (req, res) => {
    console.log('Obteniendo todos los socios... ');
    if(socios.length===0){
        console.log('No hay socios');
        res.send({message:'Lista de socios vacia'});
    }else{
        console.log("Socios: ",socios);
        res.send(socios);
    }
});

//put
app.put('/socios/:nroSocio',(req,res)=>{
    const nroSocio=parseInt(req.params.nroSocio);
    const index=socios.findIndex(s=>s.nroSocio===nroSocio);
    console.log('Solicitud PUT a /socios recibida');
    if(index!==1){
        socios[index]={nroSocio,...req.body};
        res.send(socios[index]);
        console.log("Lista de socios actualizada: ",socios);
    }else{
        console.log('Socio no encontrado');
        res.status(404).send({message:'Socio no encontrado'});
    }
});

//delete
app.delete('/socios/:nroSocio',(req,res)=>{
    const nroSocio=parseInt(req.params.nroSocio);
    const index= socios.findIndex(s=>s.nroSocio===nroSocio);
    console.log('Solicitud DELETE a /socios recibida');
    if(index!==-1){
        const deletedSocio=socios.splice(index,1);
        res.send(deletedSocio);
    }else{
        console.log('Socio no encontrado');
        res.status(404).send({message:'Socio no encontrado'});
    }
    console.log('Array socios: ',socios);
});

//profesores
//post
app.post('/profesores',(req,res)=>{
    const profesor=req.body;
    profesor.legajo=profesores.length+1;
    console.log('Solicitud POST a /profesores recibida');
    profesores.push(profesor);
    console.log('Array profesores: ',profesores);
    res.status(201).send(profesor);
});

//get por legajo
app.get('/profesores/:legajo',(req,res)=>{
    const legajo=parseInt(req.params.legajo);
    const profesor= profesores.find(p=>p.legajo===legajo);
    console.log('Solicitud GET a /profesores recibida');
    if(profesor){
        console.log('Array profesores: ',profesores);
        res.send(profesor);
    }else{
        console.log('Profesor no encontrado');
        res.status(404).send({message:'Profesor no encontrado'});
    }
});

//get de todos los profesores
app.get('/profesores', (req, res) => {
    console.log('Obteniendo todos los profesores... ');
    if(profesores.length===0){
        console.log('No hay profesores');
        res.send({message:'Lista de profesores vacia'});
    }else{
        console.log("Profesores: ",profesores);
        res.send(profesores);
    }
});

//put
app.put('/profesores/:legajo',(req,res)=>{
    const legajo=parseInt(req.params.legajo);
    const index=profesores.findIndex(p=>p.legajo===legajo);
    console.log('Solicitud PUT a /profesores recibida');
    if(index!==1){
        profesores[index]={legajo,...req.body};
        res.send(profesores[index]);
        console.log('Lista de profesores actualizada: ',profesores);
    }else{
        console.log('Profesor no encontrado');
        res.status(404).send({message:'Profesor no encontrado'});
    }
});

//delete
app.delete('/profesores/:legajo',(req,res)=>{
    const legajo=parseInt(req.params.legajo);
    const index= profesores.findIndex(p=>p.legajo===legajo);
    console.log('Solicitud DELETE a /profesores recibida');
    if(index!==-1){
        const deletedProfesor=profesores.splice(index,1);
        res.send(deletedProfesor);
    }else{
        console.log('Profesor no encontrado');
        res.status(404).send({message:'Profesor no encontrado'});
    }
    console.log('Array profesores: ',profesores);
});

//deportes
//post
app.post('/deportes',(req,res)=>{
    const deporte=req.body;
    deporte.idDeporte=deportes.length+1;
    deporte.socios = [];
    deporte.profesores= [];
    console.log('Solicitud POST a /deportes recibida');
    deportes.push(deporte);
    console.log('Array deportes: ',deportes);
    res.status(201).send(deporte);
});

//get por idDeporte
app.get('/deportes/:idDeporte',(req,res)=>{
    const idDeporte=parseInt(req.params.idDeporte);
    const deporte= deportes.find(d=>d.idDeporte===idDeporte);
    console.log('Solicitud GET a /deportes recibida');
    if(deporte){
        res.send(deporte);
    }else{
        console.log('Deporte no encontrado');
        res.status(404).send({message:'Deporte no encontrado'});
    }
    console.log('Array deportes: ',deportes);
});

//get de todos los deportes
app.get('/deportes', (req, res) => {
    console.log('Obteniendo todos los deportes...');
    if(deportes.length===0){
        console.log('No hay deportes');
        res.send({message:'Lista de deportes vacia'});
    }else{
        console.log("Deportes: ", JSON.stringify(deportes, null, 2));
        res.send(deportes);
    }
});

//put
app.put('/deportes/:idDeporte',(req,res)=>{
    const idDeporte=parseInt(req.params.idDeporte);
    const index=deportes.findIndex(d=>d.idDeporte===idDeporte);
    console.log('Solicitud PUT a /deportes recibida');
    if(index!==1){
        deportes[index]={idDeporte,...req.body};
        res.send(deportes[index]);
        console.log('Lista de deportes actualizada: ',deportes);
    }else{
        console.log('Deporte no encontrado');
        res.status(404).send({message:'Deporte no encontrado'});
    }
});

//delete
app.delete('/deportes/:idDeporte',(req,res)=>{
    const idDeporte=parseInt(req.params.idDeporte);
    const index= deportes.findIndex(d=>d.idDeporte===idDeporte);
    console.log('Solicitud DELETE a /deportes recibida');
    if(index!==-1){
        const deletedDeporte=deportes.splice(index,1);
        res.send(deletedDeporte);
    }else{
        console.log('Deporte no encontrado');
        res.status(404).send({message:'Deporte no encontrado'});
    }
    console.log('Array deportes: ',deportes);
});

// Endpoint para asignar un profesor a un deporte
app.put('/profesoresDeportes/:idDeporte/:legajo', (req, res) => {
    const idDeporte = parseInt(req.params.idDeporte);
    const legajo = parseInt(req.params.legajo);
    const indexDeporte = deportes.findIndex(d => d.idDeporte === idDeporte);
    const profesor = profesores.find(p => p.legajo === legajo);

    if (indexDeporte !== -1 && profesor) {
        deportes[indexDeporte].profesores.push(profesor);
        res.send(deportes[indexDeporte]);
        console.log('Profesor asignado a deporte: ', deportes[indexDeporte]);
    } else {
        res.status(404).send({ message: 'Deporte o profesor no encontrado' });
    }
});

// Endpoint para asignar un socio a un deporte
app.put('/sociosDeportes/:idDeporte/:nroSocio', (req, res) => {
    const idDeporte = parseInt(req.params.idDeporte);
    const nroSocio = parseInt(req.params.nroSocio);
    const indexDeporte = deportes.findIndex(d => d.idDeporte === idDeporte);
    const socio = socios.find(s => s.nroSocio === nroSocio);

    if (indexDeporte !== -1 && socio) {
        deportes[indexDeporte].socios.push(socio);
        res.send(deportes[indexDeporte]);
        console.log('Socio asignado a deporte: ', deportes[indexDeporte]);
    } else {
        res.status(404).send({ message: 'Deporte o socio no encontrado' });
    }
});

//Endpoint para obtener los socios de un deporte por idDeporte
app.get('/deportes/:idDeporte/socios', (req, res) => {
    const idDeporte = parseInt(req.params.idDeporte);
    const deporte = deportes.find(d => d.idDeporte === idDeporte);
    console.log('Solicitud GET para ver los socios de un deporte');
    if(deporte){
        res.send(deporte.socios);
        console.log('Socios mostrados correctamente');
    }else{
        console.log('Deporte no encontrado');
        res.status(404).send({message: 'Deporte no encontrado'});
    }
});

//Endpoint para obtener los profesores de un deporte por idDeporte
app.get('/deportes/:idDeporte/profesores', (req, res) => {
    const idDeporte = parseInt(req.params.idDeporte);
    const deporte = deportes.find(d => d.idDeporte === idDeporte);
    console.log('Solicitud GET para ver los profesores de un deporte');
    if(deporte){
        res.send(deporte.profesores);
        console.log('Profesores mostrados correctamente');
    }else{
        console.log('Deporte no encontrado');
        res.status(404).send({message: 'Deporte no encontrado'});
    }
});

//servidor
app.listen(port,()=>{
    console.log('Servidor escuchando en el puerto '+port);
});