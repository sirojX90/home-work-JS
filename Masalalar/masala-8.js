function findPythagoreanTriples(n) {
    for (let a = 1; a <= n; a++) {
        for (let b = a; b <= n; b++) { // b = a dan boshlanishi a <= b bo'lishini ta'minlaydi
            for (let c = b; c <= n; c++) { // c = b dan boshlanishi b <= c bo'lishini ta'minlaydi
                if (a * a + b * b === c * c) {
                    console.log(`(${a}, ${b}, ${c})`);
                }
            }
        }
    }
}

// Misol
let N = 20;
findPythagoreanTriples(N);