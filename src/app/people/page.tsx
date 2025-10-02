import { galleryItems } from '@/db/people'
import Image from 'next/image'
import Link from 'next/link'



const Gallery = () => {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12 font-mont">
            <h2 className="text-3xl font-semibold mb-8 text-center font-mont">People</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, i) => (
                    <Link
                        href={'/people/'+i}
                        key={item.id}
                        className="bg-slate-800 rounded-xl overflow-hidden shadow hover:shadow-lg border border-slate-700"
                    >
                        <div className="w-full h-48 relative">
                            <Image
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-regular text-lg">{item.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Gallery