import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCircle2, Briefcase, MapPin, Calendar, Mail, ExternalLink, X } from 'lucide-react';
import ProgressiveImage from './ProgressiveImage';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface AboutMeProps {
  name?: string;
  jobTitle?: string;
  location?: string;
  email?: string;
  profileImage?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
  name = 'Dev Chauhan',
  jobTitle = 'Project Trainee',
  location = 'Vadodara, Gujarat, India',
  email = 'devc5@outlook.com',
  profileImage = 'https://i.ibb.co/cFV5nZ1/dp1-600x600.jpg',
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const closeResume = () => setIsResumeOpen(false);

  return (
    <section id="about" className="py-20 relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </h2>
          <p className="text-gray-400">Passionate about creating innovative solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl glass-panel p-2 shadow-xl hover:shadow-2xl transition-shadow">
              <ProgressiveImage
                src={profileImage}
                placeholderSrc="https://i.ibb.co/cFV5nZ1/dp1-600x600.jpg/1a1a1a/31bdf8?text=Loading..."
                alt="Profile"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={openLightbox}
              />
            </div>
            {/* Decorative Blurs */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-panel p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{name}</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                As a Master of Computer Applications (MCA) student specializing in Artificial Intelligence at Parul
                University, I have honed my skills in various programming languages, including Python and Java.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <span>{jobTitle}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>Available for freelance work</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${email}`} className="hover:text-cyan-400 transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/assets/resume.pdf"
                  download="Dev_Chauhan_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg transform hover:scale-105"
                >
                  <UserCircle2 className="w-5 h-5" />
                  <span className="text-white">Download Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox for Image */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img src={profileImage} alt="Profile" className="w-full max-w-4xl rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Preview */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative w-full">
              <button
                onClick={closeResume}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <Document file="https://dev-chauhan-resume.tiiny.site" className="w-full h-auto">
                <Page pageNumber={1} />
              </Document>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMe;
