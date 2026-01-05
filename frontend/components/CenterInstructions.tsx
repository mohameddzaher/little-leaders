'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function CenterInstructions() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    ar: {
      title: 'التعليمات والإرشادات الخاصة بالمركز',
      button: 'انقر هنا',
      instructions: [
        'الالتزام بمواعيد الدوام الرسمي.',
        'الالتزام بالزي المدرسي وزي الرياضة في الأيام التي يوجد بها نشاط رياضة.',
        'تبدأ المناوبة الصباحية من الساعة السادسة والنصف صباحاً وتنتهي المناوبة المسائية الساعة الثالثة مساءً.',
        'يبدأ الدوام في المركز الساعة الثامنة صباحاً حيث موعد الطابور الصباحي.',
        'يقوم ولي الأمر بالتواصل مع إدارة المركز في حال وجود أي استفسار يخص الطفل أو لإيصال أي معلومة عنه ويتم بعدها التواصل من قبل الإدارة مع المعلمة لمتابعة المعلومة ومن ثم التواصل مع أولياء الأمور للإجابة عن الاستفسار.',
        'يتم تسليم الطفل صباحاً إلى استقبال المركز حيث يتم بعدها إصطحاب الطفل إلى الصف .وتسليمه إلى المعلمة باليد، ولا يُترك الطفل في المداخل والممرات مطلقاً وحيدا.',
        'يتم تسليم الأطفال إلى ولي الأمر شخصياً وفي حال رغبة ولي الأمر بقيام شخص آخر بإصطحاب الطفل يجب أن يتم إبلاغ إدارة المركز مسبقاً بذلك، وتعريفها على إسم الشخص وصلة قرابته بالطفل مع إحضار الهوية الشخصية لذلك الشخص.',
        'يُمنع إرسال الطفل إلى المركز في حال ظهور أعراض أي مرض معدي عليه حيث يُطلب من ولي الأمر إصطحابه إلى الطبيب الخاص به وإبلاغ إدارة المركز بالنتائج والمتابعة معهم.',
        'يقوم ولي الأمر في بداية كل عام بملئ إستمارة يتم تسليمها لمعلمة الصف تبين وجود أي مرض مزمن لدى الطفل كوجود حساسية تجاه أحد أصناف الأطعمة أو مرض السكري أو الربو وغيره لا قدر الله .',
        'في حال شعورالطفل بالتعب خلال الدوام بالمركز أو التعرض إلى أي حادث ( لا سمح الله ) يتم التواصل مع ولي الأمر مباشرةً.',
        'يُمنع ارسال الأطعمة غير الصحية مثل الشبس و السكاكر  والمشروبات الغازية وعلب العصير الزجاجية التي من الممكن أن يتم كسرها في الحقيبة ، والتسبب بالأذى.',
        'يُمنع إحضار أي لعبة خاصة بالطفل من المنزل ، أو ارتداء الإكسسوارات الثمينة أثناء الدوام بالمركز',
        'مشاركة الأطفال في رحلات المركز تكون فقط بموافقة خطية من ولي الأمر .',
        'التأكيد على أولياء الأمور بضرورة وجود موعد مبكر  لنوم الأطفال والتزامهم بالإستحمام ونظافة الأسنان اليومية.',
        'التأكيد على أولياء الأمور بضرورة تأمين وجبة صحية تحتوي على قطع الخضار والفواكه داخل حقيبة طعام نظيفة يتم متابعتها من قبل أولياء الأمور يومياً.',
        'في حال تغيّب الأطفال عن المركز يتم التواصل مع أولياء الأمور للإطمئنان عليهم. والتأكيد على ضرورة المواظبة للحضور اليومي لتحقيق المستوى الأكاديمي المطلوب، وفي حالات السفر يتم إعلام إدارة المركز بذلك .',
        'يتم التواصل بين أولياء الأمور ومعلمة الصف بشكل يومي عن طريق دفتر الملاحظات، وفي حال وجود أي مشاكل سلوكية أو أكاديمية أو إجتماعية تظهر على الطفل يتم التعاون ما بين أولياء الأمور وإدارة المركز لحلها.',
        'ضرورة إعلام إدارة المركز في حال وجود أي ظرف عائلي خاص بالطفل مثل حالات الانفصال أو الطلاق لا قدر الله .',
        'في حال ملاحظة المعلمة سلوكيات غير طبيعية من الطفل تبلغ إدارة المركز لعمل لجنة طبية إشرافية لعرض الحالة وتقييمها بعد التنسيق مع ولي الأمر .',
        'بعد تقييم الحالة تعطى المعلمة إرشادات التعامل مع السلوك لتقويمه ومتابعة التطور من قبل المعلمة والإدارة .',
        'في حال كانت الحالة أصعب من التعامل داخليا بالمركز يتم إبلاغ ولي الأمر لإتخاذ الخطوات الصحيحة اللازمة لمعالجة الوضع',
      ],
      intro: 'وضع المركز عدداً من التعليمات التي من شأنها تحقيق أهدافها الأكاديمية والتربوية، ومن أبرزها:ـ',
    },
    en: {
      title: 'Center Instructions and Guidelines',
      button: 'Click Here',
      instructions: [
        'Adherence to official working hours.',
        'Adherence to school uniform and sports uniform on days when there are sports activities.',
        'Morning shift starts at 6:30 AM and evening shift ends at 3:00 PM.',
        'The working day at the center begins at 8:00 AM, which is the morning assembly time.',
        'Parents must communicate with the center administration for any inquiries regarding the child or to provide any information about them, and then the administration will follow up with the teacher and respond to the parents.',
        'Children are handed over in the morning at the center reception, from where they are escorted to the classroom and handed over to the teacher by hand. Children must not be left alone in entrances or corridors under any circumstances.',
        'Children are handed over to the parent personally. If someone else is to pick up the child, the center administration must be informed in advance, with the person\'s name and relationship to the child, along with their personal ID.',
        'Children must not be sent to the center if they show symptoms of any contagious disease. Parents are required to take the child to their doctor and inform the center of the results and follow-up.',
        'At the beginning of each year, parents must fill out a form provided to the classroom teacher indicating any chronic conditions such as food allergies, diabetes, asthma, etc.',
        'If the child feels unwell during the day or is involved in any accident, the parents will be contacted immediately.',
        'Unhealthy foods such as chips, candy, soft drinks, and glass juice bottles that may break in the bag are prohibited.',
        'Bringing personal toys from home or wearing expensive accessories during center hours is prohibited.',
        'Children\'s participation in center trips requires written parental consent.',
        'Parents are reminded of the importance of early bedtimes and daily hygiene, including bathing and brushing teeth.',
        'Parents must provide a healthy meal containing vegetables and fruits in a clean lunchbox, which should be checked daily by parents.',
        'In case of a child\'s absence, the center will contact parents to check on them. Regular attendance is essential for achieving the required academic level. In case of travel, the administration must be informed.',
        'Daily communication between parents and the teacher is done through the student\'s notebook. If any behavioral, academic, or social issues arise, cooperation between parents and the center is essential to resolve them.',
        'The administration must be informed of any family circumstances affecting the child, such as separation or divorce.',
        'If the teacher observes any unusual behaviors, the administration will be informed. A supervisory medical committee will assess the case in coordination with the parents.',
        'After evaluating the case, the teacher will be given instructions on how to address and correct the behavior, with follow-up by both the teacher and the administration.',
        'If the case is beyond what can be handled internally at the center, the parents will be advised to take the necessary steps to address the situation appropriately.',
      ],
      intro: 'The center has established a number of instructions aimed at achieving its academic and educational objectives, the most prominent of which are:',
    },
  };

  const current = content[language];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-royal-blue mb-4">
            {current.title}
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-3 bg-gradient-to-r from-royal-blue to-light-blue text-white rounded-full font-semibold hover:from-light-blue hover:to-pink transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            {current.button}
          </button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-royal-blue">{current.title}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-royal-blue hover:text-light-blue text-2xl cursor-pointer"
                >
                  ×
                </button>
              </div>
              <p className="text-royal-blue/70 mb-4 text-sm">{current.intro}</p>
              <div className="max-h-96 overflow-y-auto space-y-2">
                {current.instructions.map((instruction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-2 rtl:space-x-reverse"
                  >
                    <span className="text-light-blue font-bold mt-1">•</span>
                    <span className="text-royal-blue/70 text-sm leading-relaxed flex-1">
                      {instruction}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

