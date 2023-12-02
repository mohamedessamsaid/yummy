

let data =[]
async function getHome(){
    let homeA =await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let homeAr=await homeA.json()
    var responseArr =homeAr.meals
    return responseArr
    
}


function displayHome(data) {
    let cartona=''
    for(let i=0 ; i<data.length ; i++) {
        cartona+=
            `
            <div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${data[i].strMealThumb}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h3>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>
            `
           
    }
    document.getElementById("rowData").innerHTML=cartona
}

async function display(){
    let resp2=await getHome()
    displayHome(resp2)

}
display()

function openNav(){
    $(".side-nav-menu").css({left: 0});
    $('.fa-align-justify').hide();
    
    $("#closee").css("display", "block");
}
function closeNav(){
    $(".side-nav-menu").css({left: -256.562});
    $('.fa-align-justify').show();
    
    $("#closee").css("display", "none");
}



function showSearchInputs() {
    $("#searchContainer").css('display', "block")
    $(".side-nav-menu").css({left: -256.562})
    $('#rowData').hide()
    $('.fa-align-justify').show();
    $("#closee").css("display", "none");
}

// async function searchOfMeals(name){
//     const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//     const finalData= await api.json()
//     let dataById = finalData.meals
//     display(dataById)
// }
// function searchByName(){
// let trem = searchByName.value
// searchOfMeals(trem)
// }
// async function searchByFLetter(value){
//     const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
//     const finalData= await api.json()
    
//     display(finalData.meals)
// }

// function searchByFLetter(){
// let trem = searchByFLetter.value
// searchOfMeals(trem)
// }

let info=[]
async function getCategories(){
    const cate = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const finalCate = await cate.json()
    let dataByCate = finalCate.categories
    
    $("#rowData").empty();
    displayCategory(dataByCate)
}

function displayCategory(info) {
    let cartona=''
    for(let i=0 ; i<info.length ; i++) {
        cartona+=
            `
            <div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                
                <img class="w-100" src="${info[i].strCategoryThumb}" alt="">
                <div class="meal-layer position-absolute  text-center  text-black p-2">
                    <h3>${info[i].strCategory}</h3>
                    <p>${info[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>
            `
           
    }
    document.getElementById("rowData").innerHTML=cartona
}


// details 


// Area 
function displayArea(resp3) {
    let resp2=resp3.meals
    var cartona=``
    for(let i=0 ; i<data.length ; i++){
        cartona+= `
        
        `
    }


  }
