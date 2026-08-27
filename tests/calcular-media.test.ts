import { describe, it, expect } from "vitest";
import { calcularMedia } from "@/utils/calcular-media";

describe('calcularMedia', () => {
    it('deve calcular a média das notas corretamente', () => {
        const resultado = calcularMedia([7, 8, 9])
    
        expect(resultado).toBe(8);
    })

    it('deve calcular a média com notas diferentes', () => {
        const resultado = calcularMedia([10, 6, 8])

        expect(resultado).toBe(8);
    })
})