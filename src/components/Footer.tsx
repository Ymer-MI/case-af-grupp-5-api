export const Footer = () => {
    return <footer>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
            <section>An</section>
            <section>Item</section>
            <section>Here</section>
        </div>
        <span>{ `\u00a9${new Date().getFullYear()} ` }</span>
    </footer>
}