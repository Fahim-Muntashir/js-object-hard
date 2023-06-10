const student = {
    name: 'lomo alo',
    money:
     5000,
    study: "Math",
    subjects: [
        'calculoas', 'calti', 'salti', 'maro'
    ],
    exam: function () {
        console.log(this.money)

    }
}

student.exam();