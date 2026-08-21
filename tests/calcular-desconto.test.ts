import { describe, expect, it } from "vitest";
import { calcularDesconto } from "@/utils/calcular-desconto";

describe('calcular desconto', () => {
    it('deve calcular o desconto corretamente', () => {
        const resultado = calcularDesconto(100, 10)

        expect(resultado).toBe(90)
    })
})