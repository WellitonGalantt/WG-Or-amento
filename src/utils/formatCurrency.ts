
export function formatCurrencyNumber(n:number, c:string){

  return Intl.NumberFormat('pt-br', {style: "currency", currency:c}).format(n);
}