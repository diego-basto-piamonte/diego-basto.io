"use client";
import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[]; // Array of strings to type out
  typingSpeed?: number; // Speed of typing (ms per character)
  pauseTime?: number; // Pause time after typing a word (ms)
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 100,
  pauseTime = 1000,
}) => {
  const [currentText, setCurrentText] = useState<string>(''); // Text being displayed
  const [textIndex, setTextIndex] = useState<number>(0); // Index of the current word
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // Whether it's deleting

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex]; // Full word to display
      if (isDeleting) {
        // Deleting logic
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false); // Switch to typing next word
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through words
        }
      } else {
        // Typing logic
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime); // Pause before deleting
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer); // Cleanup timer
  }, [currentText, isDeleting, textIndex, texts, typingSpeed, pauseTime]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;

