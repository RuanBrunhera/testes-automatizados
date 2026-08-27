import { describe, expect, it } from "vitest";
import { calcularProgresso } from "@/utils/calcular-progresso";

describe('calcularProgresso', () => {
    it('deve calcular a porcentagem de progresso', () => {
        const resultado = calcularProgresso(20, 100)
        
        expect(resultado).toBe(20) //TOBE() EM PORCENTAGEM!!!
    })
})