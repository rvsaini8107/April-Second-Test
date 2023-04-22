//data array 
var idCount = 3;
var emp = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
];



// select the table by id 
const table = document.getElementById('table-ShriGanesh');

var dropdown =new  Array();
// loop every value 
function printData(i){
    dropdownSet(i);

    var newtr = document.createElement("div");
    newtr.className="table-row";
    newtr.innerHTML=` 
    <div>${emp[i].id}.</div>
    <div>Name : ${emp[i].name}  </div>
    <div>Profession: ${emp[i].profession} </div>
    <div>Age:${emp[i].age}</div>`;
     table.appendChild(newtr);
}

function dropdownSet(i){
    if(!dropdown.includes(emp[i].profession)){
        dropdown.push(emp[i].profession)
    }
}
for(let i=0; i<emp.length;i++){ printData(i);} 

// show the value in dropdown 
var SelectId = document.getElementById('select-dropdown');
function dropdownFun(index){
    var createOpt = document.createElement("option");
    createOpt.innerHTML=`<option value="${index}">${index.toUpperCase()}</option>`;
    SelectId.appendChild(createOpt);
}
for(var index of dropdown){dropdownFun(index);}


// add new value here
var submit = document.getElementById('btn-add');
submit.addEventListener("click",function(){

    var countId = ++idCount;
    var nameinput = document.getElementById('name-input');
    var professioninput = document.getElementById('profession-input');
    var ageinput = document.getElementById('age-input');
    
    //add new data in array
    emp.push({id:countId,name:nameinput.value,age:ageinput.value, profession:professioninput.value });
    // show array details 
    printData(countId-1);
    dropdownFun(dropdown[dropdown.length-1]); 
});



// filter method

var filterBtn = document.getElementById("btn-filter");
// function filterFun(){}

filterBtn.addEventListener("click",function(){
    var selectValue =document.getElementById('select-dropdown').value;

    console.log(table.innerHTML="");

    var filtered = emp.filter(function(value){
            
        var newtr = document.createElement("div");
            newtr.className="table-row";
        
        if(selectValue.toLowerCase()=='all'){
            
            newtr.innerHTML=` 
            <div>${value.id}.</div>
            <div>Name : ${value.name}  </div>
            <div>Profession: ${value.profession} </div>
            <div>Age:${value.age}</div>`;
            table.innerHTML=newtr;
        }
        else if(value.profession==selectValue.toLowerCase()){
             
                newtr.innerHTML=` 
                <div>${value.id}.</div>
                <div>Name : ${value.name}  </div>
                <div>Profession: ${value.profession} </div>
                <div>Age:${value.age}</div>`;
                
                table.appendChild(newtr);
        }
        
    });

            // function printDataAfterFilter(){
                
            // }   
    // console.log(filtered)
});
