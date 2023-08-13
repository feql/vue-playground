export const switchClass = (enabled)=>{
    return [
        enabled ? 'bg-lime-300' : 'bg-zinc-300', 
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'];
}