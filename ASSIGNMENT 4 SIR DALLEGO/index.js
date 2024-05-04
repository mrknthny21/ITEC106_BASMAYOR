function generateFibonacci() {
    const termsInput = document.getElementById('termsInput');
    const outputDiv = document.getElementById('output');
    const terms = parseInt(termsInput.value);

    outputDiv.innerHTML = '';

    if (isNaN(terms) || terms <= 0 || terms >= 100) {
        outputDiv.innerHTML = 'Please enter a valid number of terms (1 to 99).';
        return;
    }

    let fibSequence = '';
    let a = 0, b = 1;

    for (let i = 1; i <= terms; i++) {
        fibSequence += a + ' ';
        const next = a + b;
        a = b;
        b = next;
    }

    outputDiv.innerHTML = 'Fibonacci Sequence: ' + fibSequence;
}
