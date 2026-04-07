function add_matrix() {

    let arr1 = []
    let arr2 = []


    arr1[0] = document.getElementById("matrix-1").value
    arr1[1] = document.getElementById("matrix-2").value
    arr1[2] = document.getElementById("matrix-3").value
    arr1[3] = document.getElementById("matrix-4").value

    arr2[0] = document.getElementById("matrix-5").value
    arr2[1] = document.getElementById("matrix-6").value
    arr2[2] = document.getElementById("matrix-7").value
    arr2[3] = document.getElementById("matrix-8").value

    let result = []
    result[0] = Number(arr1[0]) + Number(arr2[0])
    result[1] = Number(arr1[1]) + Number(arr2[1])
    result[2] = Number(arr1[2]) + Number(arr2[2])
    result[3] = Number(arr1[3]) + Number(arr2[3])

    document.getElementById("matrix-9").value = result[0]
    document.getElementById("matrix-10").value = result[1]
    document.getElementById("matrix-11").value = result[2]
    document.getElementById("matrix-12").value = result[3]

}

function subtract_matrix() {

    let arr1 = []
    let arr2 = []


    arr1[0] = document.getElementById("matrix-1").value
    arr1[1] = document.getElementById("matrix-2").value
    arr1[2] = document.getElementById("matrix-3").value
    arr1[3] = document.getElementById("matrix-4").value

    arr2[0] = document.getElementById("matrix-5").value
    arr2[1] = document.getElementById("matrix-6").value
    arr2[2] = document.getElementById("matrix-7").value
    arr2[3] = document.getElementById("matrix-8").value

    let result = []
    result[0] = Number(arr1[0]) - Number(arr2[0])
    result[1] = Number(arr1[1]) - Number(arr2[1])
    result[2] = Number(arr1[2]) - Number(arr2[2])
    result[3] = Number(arr1[3]) - Number(arr2[3])

    document.getElementById("matrix-9").value = result[0]
    document.getElementById("matrix-10").value = result[1]
    document.getElementById("matrix-11").value = result[2]
    document.getElementById("matrix-12").value = result[3]

}
function multiply_matrix() {

    let arr1 = []
    let arr2 = []

    arr1[0] = Number(document.getElementById("matrix-1").value)
    arr1[1] = Number(document.getElementById("matrix-2").value)
    arr1[2] = Number(document.getElementById("matrix-3").value)
    arr1[3] = Number(document.getElementById("matrix-4").value)

    arr2[0] = Number(document.getElementById("matrix-5").value)
    arr2[1] = Number(document.getElementById("matrix-6").value)
    arr2[2] = Number(document.getElementById("matrix-7").value)
    arr2[3] = Number(document.getElementById("matrix-8").value)

    let result = []

    result[0] = (arr1[0] * arr2[0]) + (arr1[1] * arr2[2])
    result[1] = (arr1[0] * arr2[1]) + (arr1[1] * arr2[3])
    result[2] = (arr1[2] * arr2[0]) + (arr1[3] * arr2[2])
    result[3] = (arr1[2] * arr2[1]) + (arr1[3] * arr2[3])

    document.getElementById("matrix-9").value = result[0]
    document.getElementById("matrix-10").value = result[1]
    document.getElementById("matrix-11").value = result[2]
    document.getElementById("matrix-12").value = result[3]

}

function resetAll() {
    // Matrix A reset
    document.getElementById("matrix-1").value = "";
    document.getElementById("matrix-2").value = "";
    document.getElementById("matrix-3").value = "";
    document.getElementById("matrix-4").value = "";

    // Matrix B reset
    document.getElementById("matrix-5").value = "";
    document.getElementById("matrix-6").value = "";
    document.getElementById("matrix-7").value = "";
    document.getElementById("matrix-8").value = "";

    // Result clear
    document.getElementById("matrix-9").value = "";
    document.getElementById("matrix-10").value = "";
    document.getElementById("matrix-11").value = "";
    document.getElementById("matrix-12").value = "";
}