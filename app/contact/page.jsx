const Contact = () => {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-2 bg-gray-800 text-white rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-2 bg-gray-800 text-white rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full mb-4 p-2 bg-gray-800 text-white rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-white text-black rounded font-bold hover:bg-gray-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  