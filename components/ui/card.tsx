export function Card({className="", children}: any){ return <div className={"rounded-2xl border bg-white "+className}>{children}</div>}
export function CardHeader({children, className=""}: any){ return <div className={"p-5 "+className}>{children}</div>}
export function CardTitle({children, className=""}: any){ return <h3 className={"text-lg font-semibold "+className}>{children}</h3>}
export function CardDescription({children, className=""}: any){ return <p className={"text-sm text-gray-500 "+className}>{children}</p>}
export function CardContent({children, className=""}: any){ return <div className={"p-5 pt-0 "+className}>{children}</div>}
export function CardFooter({children, className=""}: any){ return <div className={"p-5 pt-0 "+className}>{children}</div>}
