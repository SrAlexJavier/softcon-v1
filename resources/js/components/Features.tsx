import React from 'react';

const Features = () => {
    const features = [
        {
            title: 'Custom Solutions',
            description: 'Tailored software solutions for your specific needs',
            icon: '💻'
        },
        {
            title: 'Expert Support',
            description: '24/7 technical support and maintenance',
            icon: '🛠️'
        },
        {
            title: 'Innovation',
            description: 'Using cutting-edge technologies',
            icon: '🚀'
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
