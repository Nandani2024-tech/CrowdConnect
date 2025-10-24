// components/organiser/CreateEventForm.jsx
import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, Users, Tag, Upload, 
  Image as ImageIcon, AlertCircle, CheckCircle, Sparkles, X,
  ArrowLeft
} from 'lucide-react';

const CreateEventForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    venue: '',
    category: '',
    maxParticipants: '',
    registrationDeadline: '',
    eventType: 'in-person',
    ticketPrice: '',
    speakerNames: '',
    tags: '',
    posterImage: null
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Technology', 'AI & Machine Learning', 'Blockchain', 'Cloud Computing',
    'Cybersecurity', 'DevOps', 'Data Science', 'Web Development',
    'Mobile Development', 'Entrepreneurship', 'Marketing', 'Design',
    'Networking', 'Workshop', 'Conference', 'Seminar', 'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, posterImage: 'Image size must be less than 5MB' }));
        return;
      }
      
      setFormData(prev => ({ ...prev, posterImage: file }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      
      if (errors.posterImage) {
        setErrors(prev => ({ ...prev, posterImage: '' }));
      }
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, posterImage: null }));
    setImagePreview(null);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.eventName.trim()) {
      newErrors.eventName = 'Event name is required';
    } else if (formData.eventName.length < 5) {
      newErrors.eventName = 'Event name must be at least 5 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    } else {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = 'Event date cannot be in the past';
      }
    }

    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required';
    }

    if (!formData.endTime) {
      newErrors.endTime = 'End time is required';
    } else if (formData.startTime && formData.endTime <= formData.startTime) {
      newErrors.endTime = 'End time must be after start time';
    }

    if (!formData.venue.trim()) {
      newErrors.venue = 'Venue/Location is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.maxParticipants) {
      newErrors.maxParticipants = 'Max participants is required';
    } else if (formData.maxParticipants < 1) {
      newErrors.maxParticipants = 'Must be at least 1 participant';
    }

    if (!formData.registrationDeadline) {
      newErrors.registrationDeadline = 'Registration deadline is required';
    } else {
      const deadline = new Date(formData.registrationDeadline);
      const eventDate = new Date(formData.eventDate);
      if (deadline >= eventDate) {
        newErrors.registrationDeadline = 'Deadline must be before event date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      if (onSubmit) {
        onSubmit(formData);
      }
      setIsSubmitting(false);
      alert('Event created successfully! 🎉');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-8 mb-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Sparkles className="w-8 h-8" />
                Create New Event
              </h1>
              <p className="text-blue-100 mt-2">Fill in the details to create an amazing event for your attendees</p>
            </div>
            {onCancel && (
              <button 
                onClick={onCancel}
                className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            )}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Event Name */}
            <div>
              <label className="block text-white font-medium mb-2 text-lg">
                Event Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="e.g., AI & Machine Learning Summit 2025"
                className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                  errors.eventName ? 'border-red-500' : 'border-slate-600'
                } focus:border-cyan-500 focus:outline-none transition-colors text-lg`}
              />
              {errors.eventName && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.eventName}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-white font-medium mb-2 text-lg">
                Description <span className="text-red-400">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your event, what attendees will learn, and why they should join..."
                rows="5"
                className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                  errors.description ? 'border-red-500' : 'border-slate-600'
                } focus:border-cyan-500 focus:outline-none transition-colors resize-none`}
              />
              <div className="flex items-center justify-between mt-1">
                {errors.description && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.description}
                  </p>
                )}
                <p className="text-slate-400 text-sm ml-auto">
                  {formData.description.length} / 500 characters
                </p>
              </div>
            </div>

            {/* Date and Time Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Event Date <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                    errors.eventDate ? 'border-red-500' : 'border-slate-600'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                />
                {errors.eventDate && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.eventDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Start Time <span className="text-red-400">*</span>
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                    errors.startTime ? 'border-red-500' : 'border-slate-600'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                />
                {errors.startTime && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.startTime}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  End Time <span className="text-red-400">*</span>
                </label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                    errors.endTime ? 'border-red-500' : 'border-slate-600'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                />
                {errors.endTime && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.endTime}
                  </p>
                )}
              </div>
            </div>

            {/* Venue and Event Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Venue/Location <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="e.g., Tech Hub, Bengaluru or Virtual Event"
                  className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                    errors.venue ? 'border-red-500' : 'border-slate-600'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                />
                {errors.venue && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.venue}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Event Type <span className="text-red-400">*</span>
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="in-person">🏢 In-Person</option>
                  <option value="virtual">💻 Virtual</option>
                  <option value="hybrid">🌐 Hybrid</option>
                </select>
              </div>
            </div>

            {/* Category and Max Participants */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  <Tag className="w-4 h-4 inline mr-1" />
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                    errors.category ? 'border-red-500' : 'border-slate-600'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.category}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  <Users className="w-4 h-4 inline mr-1" />
                  Max Participants <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  name="maxParticipants"
                  value={formData.maxParticipants}
                  onChange={handleChange}
                  placeholder="e.g., 100"
                  min="1"
                  className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                    errors.maxParticipants ? 'border-red-500' : 'border-slate-600'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                />
                {errors.maxParticipants && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.maxParticipants}
                  </p>
                )}
              </div>
            </div>

            {/* Registration Deadline and Ticket Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  Registration Deadline <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  name="registrationDeadline"
                  value={formData.registrationDeadline}
                  onChange={handleChange}
                  className={`w-full bg-slate-700 text-white rounded-lg px-4 py-3 border ${
                    errors.registrationDeadline ? 'border-red-500' : 'border-slate-600'
                  } focus:border-cyan-500 focus:outline-none transition-colors`}
                />
                {errors.registrationDeadline && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.registrationDeadline}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Ticket Price (₹)
                </label>
                <input
                  type="number"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                  placeholder="0 for free event"
                  min="0"
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <p className="text-slate-400 text-xs mt-1">💡 Leave as 0 for free events</p>
              </div>
            </div>

            {/* Speaker Names */}
            <div>
              <label className="block text-white font-medium mb-2">
                Speaker Names (Optional)
              </label>
              <input
                type="text"
                name="speakerNames"
                value={formData.speakerNames}
                onChange={handleChange}
                placeholder="e.g., Dr. John Doe, Sarah Smith (comma separated)"
                className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-white font-medium mb-2">
                Tags (Optional)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g., AI, Innovation, Networking (comma separated)"
                className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
              />
              <p className="text-slate-400 text-xs mt-1">🏷️ Add relevant tags to help attendees discover your event</p>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-white font-medium mb-2">
                <ImageIcon className="w-4 h-4 inline mr-1" />
                Event Poster/Image (Optional)
              </label>
              
              {!imagePreview ? (
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 text-center hover:border-cyan-500 transition-colors bg-slate-700/30">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="posterUpload"
                  />
                  <label 
                    htmlFor="posterUpload" 
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="w-16 h-16 text-slate-400 mb-4" />
                    <p className="text-white mb-1 text-lg">Click to upload event poster</p>
                    <p className="text-slate-400 text-sm">PNG, JPG up to 5MB</p>
                  </label>
                </div>
              ) : (
                <div className="relative rounded-lg overflow-hidden border-2 border-cyan-500">
                  <img 
                    src={imagePreview} 
                    alt="Event poster preview" 
                    className="w-full h-80 object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors shadow-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                    ✓ Image uploaded successfully
                  </div>
                </div>
              )}
              
              {errors.posterImage && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.posterImage}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-lg font-medium transition-colors text-lg"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-4 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating Event...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Create Event
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;