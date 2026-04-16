import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Emma Collins",
    role: "Founder",
    content: "As someone with zero coding experience, I was worried about building my website. But this process made it so simple and the result is stunning.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Liam Bennet",
    role: "CEO",
    content: "I never imagined building a site could be this easy. The team guided me at every stage, and my website now feels premium and converts better.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Isabella Hayes",
    role: "Marketing Director",
    content: "Every detail was thought through. I didn't feel lost even once, and in just a week my brand had a website I'm proud to share with investors.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Daniel Brooks",
    role: "Tech Lead",
    content: "I thought launching a site would take months. But this helped me go live in days, without needing to compromise on the technical architecture.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Ava Mitchell",
    role: "Creative Director",
    content: "From colors to layouts, customizing was effortless. I finally have a website that not only looks great but also works perfectly for our campaigns.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Ethan Ward",
    role: "Startup Founder",
    content: "I was skeptical about the timeline, but this feels custom-made. My site now reflects my brand vision perfectly, without the usual agency costs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6"
        >
          Testimonials
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Trusted by teams who value <br className="hidden sm:block"/> execution over noise.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto"
        >
          From strategy to execution, we deliver focused services that help digital products design, build, and launch with clarity.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] rounded-3xl p-8 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-white/90 font-medium text-sm">{testimonial.name}</h4>
                <p className="text-white/40 text-xs">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              "{testimonial.content}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
