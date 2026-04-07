function add_matrix() {

    let arr1 = []
    let arr2 = []

    arr1[0] = document.getElementById("matrix-1").value
    arr1[1] = document.getElementById("matrix-2").value
    arr1[2] = document.getElementById("matrix-3").value
    arr1[3] = document.getElementById("matrix-4").value
    arr1[4] = document.getElementById("matrix-5").value
    arr1[5] = document.getElementById("matrix-6").value
    arr1[6] = document.getElementById("matrix-7").value
    arr1[7] = document.getElementById("matrix-8").value
    arr1[8] = document.getElementById("matrix-9").value

    arr2[0] = document.getElementById("matrix-10").value
    arr2[1] = document.getElementById("matrix-11").value
    arr2[2] = document.getElementById("matrix-12").value
    arr2[3] = document.getElementById("matrix-13").value
    arr2[4] = document.getElementById("matrix-14").value
    arr2[5] = document.getElementById("matrix-15").value
    arr2[6] = document.getElementById("matrix-16").value
    arr2[7] = document.getElementById("matrix-17").value
    arr2[8] = document.getElementById("matrix-18").value

    let result = []
    result[0] = Number(arr1[0]) + Number(arr2[0])
    result[1] = Number(arr1[1]) + Number(arr2[1])
    result[2] = Number(arr1[2]) + Number(arr2[2])
    result[3] = Number(arr1[3]) + Number(arr2[3])
    result[4] = Number(arr1[4]) + Number(arr2[4])
    result[5] = Number(arr1[5]) + Number(arr2[5])
    result[6] = Number(arr1[6]) + Number(arr2[6])
    result[7] = Number(arr1[7]) + Number(arr2[7])
    result[8] = Number(arr1[8]) + Number(arr2[8])


    document.getElementById("matrix-19").value = result[0]
    document.getElementById("matrix-20").value = result[1]
    document.getElementById("matrix-21").value = result[2]
    document.getElementById("matrix-22").value = result[3]
    document.getElementById("matrix-23").value = result[4]
    document.getElementById("matrix-24").value = result[5]
    document.getElementById("matrix-25").value = result[6]
    document.getElementById("matrix-26").value = result[7]
    document.getElementById("matrix-27").value = result[8]

}


function subtract_matrix() {

    let arr1 = []
    let arr2 = []

    arr1[0] = document.getElementById("matrix-1").value
    arr1[1] = document.getElementById("matrix-2").value
    arr1[2] = document.getElementById("matrix-3").value
    arr1[3] = document.getElementById("matrix-4").value
    arr1[4] = document.getElementById("matrix-5").value
    arr1[5] = document.getElementById("matrix-6").value
    arr1[6] = document.getElementById("matrix-7").value
    arr1[7] = document.getElementById("matrix-8").value
    arr1[8] = document.getElementById("matrix-9").value

    arr2[0] = document.getElementById("matrix-10").value
    arr2[1] = document.getElementById("matrix-11").value
    arr2[2] = document.getElementById("matrix-12").value
    arr2[3] = document.getElementById("matrix-13").value
    arr2[4] = document.getElementById("matrix-14").value
    arr2[5] = document.getElementById("matrix-15").value
    arr2[6] = document.getElementById("matrix-16").value
    arr2[7] = document.getElementById("matrix-17").value
    arr2[8] = document.getElementById("matrix-18").value

    let result = []
    result[0] = Number(arr1[0]) - Number(arr2[0])
    result[1] = Number(arr1[1]) - Number(arr2[1])
    result[2] = Number(arr1[2]) - Number(arr2[2])
    result[3] = Number(arr1[3]) - Number(arr2[3])
    result[4] = Number(arr1[4]) - Number(arr2[4])
    result[5] = Number(arr1[5]) - Number(arr2[5])
    result[6] = Number(arr1[6]) - Number(arr2[6])
    result[7] = Number(arr1[7]) - Number(arr2[7])
    result[8] = Number(arr1[8]) - Number(arr2[8])


    document.getElementById("matrix-19").value = result[0]
    document.getElementById("matrix-20").value = result[1]
    document.getElementById("matrix-21").value = result[2]
    document.getElementById("matrix-22").value = result[3]
    document.getElementById("matrix-23").value = result[4]
    document.getElementById("matrix-24").value = result[5]
    document.getElementById("matrix-25").value = result[6]
    document.getElementById("matrix-26").value = result[7]
    document.getElementById("matrix-27").value = result[8]

}

function multiply_matrix() {

    let arr1 = []
    let arr2 = []

    arr1[0] = Number(document.getElementById("matrix-1").value)
    arr1[1] = Number(document.getElementById("matrix-2").value)
    arr1[2] = Number(document.getElementById("matrix-3").value)
    arr1[3] = Number(document.getElementById("matrix-4").value)
    arr1[4] = Number(document.getElementById("matrix-5").value)
    arr1[5] = Number(document.getElementById("matrix-6").value)
    arr1[6] = Number(document.getElementById("matrix-7").value)
    arr1[7] = Number(document.getElementById("matrix-8").value)
    arr1[8] = Number(document.getElementById("matrix-9").value)

    arr2[0] = Number(document.getElementById("matrix-10").value)
    arr2[1] = Number(document.getElementById("matrix-11").value)
    arr2[2] = Number(document.getElementById("matrix-12").value)
    arr2[3] = Number(document.getElementById("matrix-13").value)
    arr2[4] = Number(document.getElementById("matrix-14").value)
    arr2[5] = Number(document.getElementById("matrix-15").value)
    arr2[6] = Number(document.getElementById("matrix-16").value)
    arr2[7] = Number(document.getElementById("matrix-17").value)
    arr2[8] = Number(document.getElementById("matrix-18").value)

    let result = []

    // Row 1
    result[0] = arr1[0] * arr2[0] + arr1[1] * arr2[3] + arr1[2] * arr2[6]
    result[1] = arr1[0] * arr2[1] + arr1[1] * arr2[4] + arr1[2] * arr2[7]
    result[2] = arr1[0] * arr2[2] + arr1[1] * arr2[5] + arr1[2] * arr2[8]

    // Row 2
    result[3] = arr1[3] * arr2[0] + arr1[4] * arr2[3] + arr1[5] * arr2[6]
    result[4] = arr1[3] * arr2[1] + arr1[4] * arr2[4] + arr1[5] * arr2[7]
    result[5] = arr1[3] * arr2[2] + arr1[4] * arr2[5] + arr1[5] * arr2[8]

    // Row 3
    result[6] = arr1[6] * arr2[0] + arr1[7] * arr2[3] + arr1[8] * arr2[6]
    result[7] = arr1[6] * arr2[1] + arr1[7] * arr2[4] + arr1[8] * arr2[7]
    result[8] = arr1[6] * arr2[2] + arr1[7] * arr2[5] + arr1[8] * arr2[8]


    document.getElementById("matrix-19").value = result[0]
    document.getElementById("matrix-20").value = result[1]
    document.getElementById("matrix-21").value = result[2]
    document.getElementById("matrix-22").value = result[3]
    document.getElementById("matrix-23").value = result[4]
    document.getElementById("matrix-24").value = result[5]
    document.getElementById("matrix-25").value = result[6]
    document.getElementById("matrix-26").value = result[7]
    document.getElementById("matrix-27").value = result[8]

}

function resetAll() {

    document.getElementById("matrix-1").value = "";
    document.getElementById("matrix-2").value = "";
    document.getElementById("matrix-3").value = "";
    document.getElementById("matrix-4").value = "";
    document.getElementById("matrix-5").value = "";
    document.getElementById("matrix-6").value = "";
    document.getElementById("matrix-7").value = "";
    document.getElementById("matrix-8").value = "";
    document.getElementById("matrix-9").value = "";

    document.getElementById("matrix-10").value = "";
    document.getElementById("matrix-11").value = "";
    document.getElementById("matrix-12").value = "";
    document.getElementById("matrix-13").value = "";
    document.getElementById("matrix-14").value = "";
    document.getElementById("matrix-15").value = "";
    document.getElementById("matrix-16").value = "";
    document.getElementById("matrix-17").value = "";
    document.getElementById("matrix-18").value = "";


    document.getElementById("matrix-19").value = "";
    document.getElementById("matrix-20").value = "";
    document.getElementById("matrix-21").value = "";
    document.getElementById("matrix-22").value = "";
    document.getElementById("matrix-23").value = "";
    document.getElementById("matrix-24").value = "";
    document.getElementById("matrix-25").value = "";
    document.getElementById("matrix-26").value = "";
    document.getElementById("matrix-27").value = "";

}