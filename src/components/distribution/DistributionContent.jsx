"use client";
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export const DistributionContent = () => {
  const router = useRouter();
  const t = useTranslations('distribution');

  const handleNavigation = (path) => {
    router.push(path);
  };

  // Obtener arrays usando t.raw() igual que en FAQ
  const rawGlobalList = t.raw('services_global_list');
  const rawManagementList = t.raw('services_management_list');
  const rawFeaturesList = t.raw('features_list');
  const rawBasicFeatures = t.raw('pricing_basic_features');
  const rawPopularFeatures = t.raw('pricing_popular_features');

  // Convertir a arrays como en FAQ
  const globalList = Array.isArray(rawGlobalList) ? rawGlobalList : [];
  const managementList = Array.isArray(rawManagementList) ? rawManagementList : [];
  const featuresList = Array.isArray(rawFeaturesList) ? rawFeaturesList : [];
  const basicFeatures = Array.isArray(rawBasicFeatures) ? rawBasicFeatures : [];
  const popularFeatures = Array.isArray(rawPopularFeatures) ? rawPopularFeatures : [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12 bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('hero_title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('hero_subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('services_global_title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('services_global_description')}
            </p>
            <ul className="space-y-2 text-gray-700">
              {globalList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('services_management_title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('services_management_description')}
            </p>
            <ul className="space-y-2 text-gray-700">
              {managementList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {t('features_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuresList.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('pricing_title')}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('pricing_basic_title')}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {t('pricing_basic_price')}<span className="text-lg text-gray-600">/mes</span>
              </div>
              <ul className="space-y-2 text-gray-700 text-left">
                {basicFeatures.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleNavigation('/auth/login')}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {t('pricing_basic_button')}
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 relative border-2 border-blue-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {t('pricing_popular_label')}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('pricing_popular_title')}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {t('pricing_popular_price')}<span className="text-lg text-gray-600">/año</span>
              </div>
              <ul className="space-y-2 text-gray-700 text-left">
                {popularFeatures.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleNavigation('/auth/login')}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-medium"
              >
                {t('pricing_popular_button')}
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('cta_title')}</h2>
          <p className="text-xl mb-6 opacity-90">
            {t('cta_subtitle')}
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => handleNavigation('/auth/login')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('cta_button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};