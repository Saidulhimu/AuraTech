import Review from '../Review';

const reviewsData = [
    {
        id: 1,
        name: 'Shoab Akther',
        role: 'Verified Buyer',
        avatar: './shoab.jpeg',
        rating: 5,
        product: 'Wireless Headphones',
        comment: 'Sound quality ekdom Next Level! Active noise cancellation khubiy effective. Packaging premium chhilo.',
    },
    {
        id: 2,
        name: 'Jannatul Ferdous',
        role: 'Verified Buyer',
        avatar: './jfr.jpeg',
        rating: 5,
        product: 'Smart Watch Series 7',
        comment: 'Display sharp ebong sensor-gulo thikthak kaj korse. Express delivery-er jonno dhonnobad!',
    },
    {
        id: 3,
        name: 'Saidul Islam',
        role: 'Verified Buyer',
        avatar: './saidul.jpg',
        rating: 4,
        product: 'Mechanical Keyboard',
        comment: 'RGB lighting ebong key switch-er tactile feel darun. Build quality o kafi solid.',
    },
    {
        id: 4,
        name: 'Sumaiya Islam',
        role: 'Verified Buyer',
        avatar: './shova.jpeg',
        rating: 5,
        product: 'Gaming Mouse',
        comment: 'DPI customizability fast response dey. Ergonomic design-er jonno long gaming session-e comfort paowa jay.',
    },
];

const UserReview = () => {
    return (
        <section className="my-24 max-w-[1440px] px-6 md:px-12 mx-auto">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mt-3">
                    What Our Customers Say
                </h2>
                <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
                    Real feedback from verified tech enthusiasts who upgraded their setup with Aura Tech.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviewsData.map((item) => (
                    <Review key={item.id} review={item} />
                ))}
            </div>
        </section>
    );
};

export default UserReview;