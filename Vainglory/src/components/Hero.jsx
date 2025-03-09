export default function Hero({ hero }){
    return (
        <div class="hero">
            <img src={hero.img_src} alt={hero.name}/>
            <div class="hero-info">
                <div>{hero.name}</div>
                <div class="hero-role">{hero.role}</div>
            </div>
        </div>
    );
}