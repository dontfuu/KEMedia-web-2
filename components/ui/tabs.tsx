export function Tabs({children, className=""}: any){ return <div className={className}>{children}</div>}
export function TabsList({children, className=""}: any){ return <div className={"rounded-xl border p-1 flex gap-1 "+className}>{children}</div>}
export function TabsTrigger({children, className="", onClick}: any){ return <button onClick={onClick} className={"px-3 py-1.5 text-sm rounded-lg border"}>{children}</button>}
export function TabsContent({children, className=""}: any){ return <div className={className}>{children}</div>}