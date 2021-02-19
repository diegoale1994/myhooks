import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from '@testing-library/react-hooks'
describe('useCounter', () => {
    test('debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });

    test('debe retornar valores definidos', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.state).toBe(100);
    });

    test('debe de incrementar el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment();
        })
        const { state } = result.current;
        expect(state).toBe(101);
    })

    test('debe de decrementar el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
        })
        const { state } = result.current;
        expect(state).toBe(99);
    })

    test('debe de resetear el counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
            reset();
        })
        const { state } = result.current;
        expect(state).toBe(100);
    })

})
