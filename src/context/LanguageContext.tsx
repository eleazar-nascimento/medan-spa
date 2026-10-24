import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export type Language = 'pt' | 'en' | 'id';

export interface Translations {
  loading_title: string;
  loading_subtitle: string;
  search_placeholder: string;
  login: string;
  home: string;
  services: string;
  news: string;
  data: string;
  info: string;
  documents: string;
  permits: string;
  tax: string;
  complaints: string;
  hero_badge: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_description: string;
  hero_features: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_main_services: string;
  hero_services_desc: string;
  service_population: string;
  service_population_desc: string;
  service_population_long_desc: string;
  service_tax_payment: string;
  service_tax_desc: string;
  service_tax_long_desc: string;
  service_business_permit: string;
  service_business_desc: string;
  service_business_long_desc: string;
  service_support: string;
  service_support_desc: string;
  service_complaints_long_desc: string;
  service_health: string;
  service_health_desc: string;
  trust_security: string;
  trust_security_desc: string;
  trust_speed: string;
  trust_speed_desc: string;
  trust_ease: string;
  trust_ease_desc: string;
  quick_access_badge: string;
  quick_access_title: string;
  quick_access_desc: string;
  start_now: string;
  estimated_time: string;
  completed_today: string;
  services_completed: string;
  services_completed_sub: string;
  average_response: string;
  average_response_val: string;
  average_response_sub: string;
  satisfaction_rate: string;
  satisfaction_rate_sub: string;
  online_services: string;
  online_services_sub: string;
  est_10_min: string;
  est_5_min: string;
  est_1_day: string;
  est_24_hours: string;
  est_realtime: string;
  persona_title: string;
  persona_desc: string;
  persona_student: string;
  persona_family: string;
  persona_elderly: string;
  persona_business: string;
  student_domicile: string;
  student_legalization: string;
  student_poor_certificate: string;
  student_scholarship: string;
  family_birth_cert: string;
  family_card: string;
  family_marriage: string;
  family_health: string;
  elderly_social_aid: string;
  elderly_free_health: string;
  elderly_active_program: string;
  elderly_consultation: string;
  business_siup_tdp: string;
  business_permit: string;
  business_ads_permit: string;
  business_tax: string;
  news_title: string;
  news_desc: string;
  news_tab: string;
  announcements_tab: string;
  news_scholarship_title: string;
  news_scholarship_desc: string;
  news_app_title: string;
  news_app_desc: string;
  news_festival_title: string;
  news_festival_desc: string;
  announce_holiday_title: string;
  announce_holiday_desc: string;
  announce_infrastructure_title: string;
  announce_infrastructure_desc: string;
  announce_health_title: string;
  announce_health_desc: string;
  agenda_title: string;
  agenda_desc: string;
  view_all_agenda: string;
  agenda_month: string;
  agenda_today: string;
  agenda_has_event: string;
  agenda_meeting_title: string;
  agenda_dialog_title: string;
  agenda_smart_city_title: string;
  meeting_type: string;
  public_dialog_type: string;
  public_event_type: string;
  officials_participants: string;
  public_officials_participants: string;
  all_citizens_participants: string;
  transparency_badge: string;
  transparency_title_1: string;
  transparency_title_2: string;
  transparency_desc: string;
  transparency_features: string;
  financial_report: string;
  financial_desc: string;
  budget_2025: string;
  budget_desc: string;
  e_report: string;
  e_report_desc: string;
  open_data: string;
  open_data_desc: string;
  total_budget: string;
  development: string;
  reports_received: string;
  datasets: string;
  progress: string;
  portal_title: string;
  portal_desc: string;
  budget_distributed: string;
  projects_completed: string;
  transparency_score: string;
  access_portal: string;
  testimonials_title: string;
  testimonials_desc: string;
  testimonials_cta_1: string;
  testimonials_cta_2: string;
  testimonials_question: string;
  priority_important: string;
  priority_info: string;
  category_education: string;
  category_technology: string;
  category_culture: string;
  popular_label: string;
  accessibility: string;
  text_size: string;
  display_mode: string;
  light: string;
  dark: string;
  language: string;
  disability_support: string;
  access_guide: string;
  contact_us: string;
  main_services: string;
  information: string;
  transparency: string;
  social_media: string;
  privacy_policy: string;
  terms_conditions: string;
  sitemap: string;
  copyright: string;
  fab_whatsapp: string;
  fab_report: string;
  fab_call_center: string;
  modal_close: string;
  modal_start_service: string;
  modal_requirements: string;
  modal_online_status: string;
  weekdays: string[];
  search_suggestions: string[];
  footer_services_list: string[];
  footer_info_list: string[];
  footer_transparency_list: string[];
  testimonials_list: Array<{
    name: string;
    role: string;
    rating: number;
    comment: string;
    avatar: string;
  }>;
}

const translations: Record<Language, Translations> = {
  pt: {
    loading_title: 'Prefeitura de Medan',
    loading_subtitle: 'Preparando os melhores serviços digitais para você...',
    search_placeholder: 'Buscar serviço...',
    login: 'Entrar',
    home: 'Início',
    services: 'Serviços',
    news: 'Notícias',
    data: 'Dados',
    info: 'Informações',
    documents: 'Documentos',
    permits: 'Licenças',
    tax: 'Impostos',
    complaints: 'Ouvidoria',
    hero_badge: 'Portal Oficial do Governo da Cidade de Medan',
    hero_title_1: 'Serviços Digitais',
    hero_title_2: 'Cidade de Medan',
    hero_description: 'Plataforma integrada para acessar todos os serviços governamentais',
    hero_features: 'Eficiente • Transparente • Confiável',
    hero_cta_primary: 'Iniciar Serviço',
    hero_cta_secondary: 'Suporte 24/7',
    hero_main_services: 'Serviços Principais',
    hero_services_desc: 'Acesso rápido aos serviços públicos mais utilizados pelos cidadãos',
    service_population: 'Documentos Civis',
    service_population_desc: 'RG Digital, Cartão Família, Certidões',
    service_population_long_desc: 'RG Digital, Cartão Família, Certidão de Nascimento e Óbito',
    service_tax_payment: 'Pagamento de Impostos',
    service_tax_desc: 'IPTU, IPVA e Taxas',
    service_tax_long_desc: 'IPTU, IPVA e Tributos Municipais',
    service_business_permit: 'Alvarás e Licenças',
    service_business_desc: 'Alvará Comercial, CNPJ, Licenças',
    service_business_long_desc: 'Alvará Comercial, Registro Empresarial e Licença Ambiental',
    service_support: 'Ajuda e Suporte',
    service_support_desc: 'Central de Atendimento 24/7',
    service_complaints_long_desc: 'Relatos, Ouvidoria e Sugestões dos Cidadãos',
    service_health: 'Serviços de Saúde',
    service_health_desc: 'Hospitais, UBS e Postos de Saúde',
    trust_security: 'Segurança de Dados',
    trust_security_desc: 'Garantida',
    trust_speed: 'Processo Rápido',
    trust_speed_desc: '< 15 minutos',
    trust_ease: 'Fácil de Usar',
    trust_ease_desc: 'Intuitivo e acessível',
    quick_access_badge: 'Serviços Prioritários',
    quick_access_title: 'Acesso Rápido aos Serviços Digitais',
    quick_access_desc: 'Escolha o serviço que você precisa para obter atendimento rápido, digital e eficiente',
    start_now: 'Começar Agora',
    estimated_time: 'Est.',
    completed_today: 'hoje',
    services_completed: 'Serviços Concluídos',
    services_completed_sub: 'Neste mês',
    average_response: 'Tempo Médio de Resposta',
    average_response_val: '2,3 min',
    average_response_sub: 'Tempo real',
    satisfaction_rate: 'Satisfação do Cidadão',
    satisfaction_rate_sub: 'Avaliação',
    online_services: 'Serviços Online',
    online_services_sub: 'Ininterrupto',
    est_10_min: '10 minutos',
    est_5_min: '5 minutos',
    est_1_day: '1 dia',
    est_24_hours: '24 horas',
    est_realtime: 'Tempo real',
    persona_title: 'Você é Cidadão, Nós Ajudamos',
    persona_desc: 'Serviços personalizados para atender às necessidades específicas de cada grupo da sociedade',
    persona_student: 'Estudantes',
    persona_family: 'Famílias',
    persona_elderly: 'Idosos',
    persona_business: 'Empresários',
    student_domicile: 'Comprovante de Residência',
    student_legalization: 'Autenticação de Documentos',
    student_poor_certificate: 'Declaração de Hipossuficiência',
    student_scholarship: 'Bolsa de Estudos Municipal',
    family_birth_cert: 'Certidão de Nascimento',
    family_card: 'Cadastro Familiar Único',
    family_marriage: 'Certidão de Casamento',
    family_health: 'Atendimento de Saúde Familiar',
    elderly_social_aid: 'Assistência Social',
    elderly_free_health: 'Saúde Gratuita para Idosos',
    elderly_active_program: 'Programa Idoso Ativo',
    elderly_consultation: 'Consulta Médica Prioritária',
    business_siup_tdp: 'Alvará de Funcionamento',
    business_permit: 'Licença Sanitária e Ambiental',
    business_ads_permit: 'Licença de Publicidade',
    business_tax: 'Imposto sobre Hotéis e Restaurantes',
    news_title: 'O Que Há de Novo na Cidade de Medan?',
    news_desc: 'Fique atualizado com as últimas notícias e comunicados importantes da Prefeitura de Medan',
    news_tab: '📰 Notícias',
    announcements_tab: '📢 Comunicados',
    news_scholarship_title: 'Abertura das Inscrições para o Programa de Bolsas de Medan 2025',
    news_scholarship_desc: 'A Prefeitura de Medan abre inscrições de bolsas de estudo para estudantes de destaque da rede municipal e universitária...',
    news_app_title: 'Lançamento do Aplicativo Móvel de Serviços Públicos Digitais',
    news_app_desc: 'O novo aplicativo facilita o acesso dos cidadãos aos serviços públicos diretamente pelo smartphone com autenticação digital...',
    news_festival_title: 'Festival Cultural de Medan 2025 Começa em Breve',
    news_festival_desc: 'Celebre a diversidade cultural e gastronômica de Medan em um festival anual vibrante e aberto a todas as famílias...',
    announce_holiday_title: 'Comunicado de Feriado Nacional de Eid al-Adha',
    announce_holiday_desc: 'Os postos presenciais de atendimento público estarão fechados em 17 de junho de 2025. Serviços digitais seguem 24h...',
    announce_infrastructure_title: 'Obras de Melhoria na Infraestrutura das Vias Principais',
    announce_infrastructure_desc: 'A construção do viaduto e o alargamento das avenidas centrais começarão na próxima semana com rotas alternativas...',
    announce_health_title: 'Inauguração de Nova Unidade de Saúde em Medan Leste',
    announce_health_desc: 'Novo centro de saúde moderno está pronto para atender a comunidade com equipamentos de última geração...',
    agenda_title: 'Agenda da Prefeitura',
    agenda_desc: 'Transparência nas atividades governamentais para fortalecer a confiança pública',
    view_all_agenda: 'Ver Toda a Agenda',
    agenda_month: 'Junho 2025',
    agenda_today: 'Hoje',
    agenda_has_event: 'Com evento agendado',
    agenda_meeting_title: 'Reunião de Coordenação de Infraestrutura Urbana',
    agenda_dialog_title: 'Diálogo Público sobre o Orçamento Municipal 2026',
    agenda_smart_city_title: 'Lançamento do Programa Cidade Inteligente (Smart City) Medan',
    meeting_type: 'Reunião',
    public_dialog_type: 'Diálogo Público',
    public_event_type: 'Evento Público',
    officials_participants: 'Secretários Municipais e Prefeito',
    public_officials_participants: 'Cidadãos e Gestores Públicos',
    all_citizens_participants: 'Todos os Cidadãos',
    transparency_badge: 'Transparência Pública',
    transparency_title_1: 'Nós Somos',
    transparency_title_2: 'Responsáveis',
    transparency_desc: 'Transparência e prestação de contas em cada aspecto da gestão pública municipal',
    transparency_features: 'Confiável • Aberto • Transparente',
    financial_report: 'Relatório Financeiro',
    financial_desc: 'Orçamento Municipal 2025 e execução orçamentária',
    budget_2025: 'Orçamento 2025',
    budget_desc: 'Alocação de recursos para desenvolvimento urbano',
    e_report: 'e-OUVIDORIA',
    e_report_desc: 'Manifestações, denúncias e sugestões dos cidadãos',
    open_data: 'Dados Abertos',
    open_data_desc: 'Acesso a dados públicos e estatísticas da cidade',
    total_budget: 'Orçamento Total',
    development: 'Desenvolvimento',
    reports_received: 'Relatos Recebidos',
    datasets: 'Conjuntos de Dados',
    progress: 'Progresso',
    portal_title: 'Portal de Transparência em Tempo Real',
    portal_desc: 'Acesse todos os dados, contratos e relatórios governamentais em um painel interativo unificado',
    budget_distributed: 'Orçamento Executado',
    projects_completed: 'Projetos Concluídos',
    transparency_score: 'Índice de Transparência',
    access_portal: 'Acessar Portal da Transparência',
    testimonials_title: 'Depoimentos e Aspirações dos Cidadãos',
    testimonials_desc: 'A voz do cidadão é nossa prioridade. Veja a experiência dos moradores com os serviços digitais de Medan',
    testimonials_cta_1: 'Escrever Depoimento',
    testimonials_cta_2: 'Enviar Sugestão',
    testimonials_question: 'Quer compartilhar sua experiência conosco?',
    priority_important: 'Importante',
    priority_info: 'Informativo',
    category_education: 'Educação',
    category_technology: 'Tecnologia',
    category_culture: 'Cultura',
    popular_label: 'Popular',
    accessibility: 'Acessibilidade',
    text_size: 'Tamanho do Texto',
    display_mode: 'Modo de Exibição',
    light: 'Claro',
    dark: 'Escuro',
    language: 'Idioma',
    disability_support: 'Suporte PcD',
    access_guide: 'Guia de Acesso',
    contact_us: 'Fale Conosco',
    main_services: 'Serviços Principais',
    information: 'Informações',
    transparency: 'Transparência',
    social_media: 'Redes Sociais',
    privacy_policy: 'Política de Privacidade',
    terms_conditions: 'Termos e Condições',
    sitemap: 'Mapa do Site',
    copyright: '2025 Governo da Cidade de Medan. Todos os direitos reservados.',
    fab_whatsapp: 'WhatsApp Oficial',
    fab_report: 'Relatar Problema',
    fab_call_center: 'Central 24h',
    modal_close: 'Fechar',
    modal_start_service: 'Solicitar Serviço Online',
    modal_requirements: 'Atendimento 100% digital integrado com protocolo imediato.',
    modal_online_status: 'Disponível Online Agora',
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    search_suggestions: [
      'RG Digital (e-KTP)',
      'Pagamento de Impostos',
      'Alvará de Funcionamento',
      'Certidão de Nascimento',
      'Cadastro Familiar',
      'Certidão de Casamento',
      'Assistência Social',
      'Ouvidoria (e-LAPOR)',
    ],
    footer_services_list: [
      'RG Digital e Cartão Família',
      'Alvará Empresarial',
      'Tributos Municipais',
      'Ouvidoria Online',
      'Serviços de Saúde',
      'Educação e Bolsas',
    ],
    footer_info_list: [
      'Últimas Notícias',
      'Comunicados Oficiais',
      'Agenda de Eventos',
      'Perfil de Medan',
      'Estrutura Organizacional',
      'História de Medan',
    ],
    footer_transparency_list: [
      'Relatório Financeiro',
      'Orçamento Anual 2025',
      'Dados Abertos',
      'e-Ouvidoria',
    ],
    testimonials_list: [
      {
        name: 'Budi Santoso',
        role: 'Morador de Medan Oeste',
        rating: 5,
        comment: 'Emiti meu alvará comercial em apenas 10 minutos, excelente! O atendimento é rápido e a equipe é muito prestativa.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Siti Nurhaliza',
        role: 'Mãe de Família',
        rating: 5,
        comment: 'O aplicativo e-Ouvidoria ajuda muito a relatar problemas no bairro. Resposta rápida e solução eficiente.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6c7ad7c?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Ahmad Rahman',
        role: 'Empresário Local',
        rating: 4,
        comment: 'O processo de renovação da licença comercial agora é muito mais simples online. Não preciso mais enfrentar filas.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Maria Simbolon',
        role: 'Estudante Universitária',
        rating: 5,
        comment: 'A emissão da carteira de identidade para estudantes ficou muito fácil. Muito obrigada, Prefeitura de Medan!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Ridho Tarigan',
        role: 'Aposentado',
        rating: 5,
        comment: 'O programa de saúde gratuita para idosos ajuda demais. Atendimento acolhedor e instalações completas.',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Linda Wijaya',
        role: 'Profissional do Setor Privado',
        rating: 4,
        comment: 'O novo portal é muito intuitivo e as informações são completas. Fácil encontrar qualquer serviço necessário.',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      },
    ],
  },
  en: {
    loading_title: 'Medan City Gov',
    loading_subtitle: 'Preparing the best services for you...',
    search_placeholder: 'Search services...',
    login: 'Login',
    home: 'Home',
    services: 'Services',
    news: 'News',
    data: 'Data',
    info: 'Info',
    documents: 'Documents',
    permits: 'Permits',
    tax: 'Tax',
    complaints: 'Complaints',
    hero_badge: 'Official Portal of Medan City Government',
    hero_title_1: 'Digital Services',
    hero_title_2: 'Medan City',
    hero_description: 'Integrated platform to access all government services',
    hero_features: 'Efficient • Transparent • Trusted',
    hero_cta_primary: 'Start Service',
    hero_cta_secondary: '24/7 Support',
    hero_main_services: 'Main Services',
    hero_services_desc: 'Quick access to the most frequently used services',
    service_population: 'Population Documents',
    service_population_desc: 'ID Card, Family Card, Certificates',
    service_population_long_desc: 'ID Card, Family Card, Certificates, Birth & Death Certificate',
    service_tax_payment: 'Tax Payment',
    service_tax_desc: 'Property Tax, Vehicle Tax',
    service_tax_long_desc: 'Property Tax, Vehicle Tax, Regional Tax',
    service_business_permit: 'Business Permits',
    service_business_desc: 'Business License, Trade Permit',
    service_business_long_desc: 'Business License, Trade Permit, Disturbance Permit',
    service_support: 'Help & Support',
    service_support_desc: '24/7 Call Center',
    service_complaints_long_desc: 'Reports, Complaints & Aspirations',
    service_health: 'Health Services',
    service_health_desc: 'Hospital, Clinic Info',
    trust_security: 'Data Security',
    trust_security_desc: 'Guaranteed',
    trust_speed: 'Fast Process',
    trust_speed_desc: '< 15 minutes',
    trust_ease: 'Easy to Use',
    trust_ease_desc: 'User friendly',
    quick_access_badge: 'Priority Services',
    quick_access_title: 'Quick Access Digital Services',
    quick_access_desc: 'Choose the service you need to get fast and efficient assistance',
    start_now: 'Start Now',
    estimated_time: 'Est.',
    completed_today: 'today',
    services_completed: 'Services Completed',
    services_completed_sub: 'This month',
    average_response: 'Average Response',
    average_response_val: '2.3 mins',
    average_response_sub: 'Real-time',
    satisfaction_rate: 'Citizen Satisfaction',
    satisfaction_rate_sub: 'Rating',
    online_services: 'Online Services',
    online_services_sub: 'Non-stop',
    est_10_min: '10 mins',
    est_5_min: '5 mins',
    est_1_day: '1 day',
    est_24_hours: '24 hours',
    est_realtime: 'Realtime',
    persona_title: "You're a Citizen, We Help",
    persona_desc: 'Services tailored to the specific needs of each community group',
    persona_student: 'Student',
    persona_family: 'Family',
    persona_elderly: 'Elderly',
    persona_business: 'Business Owner',
    student_domicile: 'Domicile Certificate',
    student_legalization: 'Document Legalization',
    student_poor_certificate: 'Poverty Certificate',
    student_scholarship: 'Regional Scholarship',
    family_birth_cert: 'Birth Certificate',
    family_card: 'Family Card',
    family_marriage: 'Marriage Certificate',
    family_health: 'Health Services',
    elderly_social_aid: 'Social Assistance',
    elderly_free_health: 'Free Health Services',
    elderly_active_program: 'Active Elderly Program',
    elderly_consultation: 'Medical Consultation',
    business_siup_tdp: 'Business License & Trade Permit',
    business_permit: 'Disturbance Permit',
    business_ads_permit: 'Advertising Permit',
    business_tax: 'Restaurant & Hotel Tax',
    news_title: "What's New in Medan City?",
    news_desc: 'Stay updated with the latest news and important announcements from Medan City Government',
    news_tab: '📰 News',
    announcements_tab: '📢 Announcements',
    news_scholarship_title: 'Opening of Medan City Scholarship Program Registration 2025',
    news_scholarship_desc: 'Medan City Government opens scholarship registration for outstanding students...',
    news_app_title: 'Launch of Digital Public Service Mobile Application',
    news_app_desc: 'New application makes it easier for citizens to access public services via smartphone...',
    news_festival_title: 'Medan Cultural Festival 2025 Coming Soon',
    news_festival_desc: "Celebrate Medan's cultural diversity in a festive annual festival...",
    announce_holiday_title: 'National Holiday Announcement for Eid al-Adha',
    announce_holiday_desc: 'Public services will be closed on June 17, 2025...',
    announce_infrastructure_title: 'Protocol Road Infrastructure Improvement',
    announce_infrastructure_desc: 'Flyover construction and road widening will start next week...',
    announce_health_title: 'Opening of New Health Facility in East Medan',
    announce_health_desc: 'New health center ready to serve the community with modern facilities...',
    agenda_title: 'City Gov Agenda',
    agenda_desc: 'Transparency of government activities to build public trust',
    view_all_agenda: 'View All Agenda',
    agenda_month: 'June 2025',
    agenda_today: 'Today',
    agenda_has_event: 'Scheduled event',
    agenda_meeting_title: 'Infrastructure Development Coordination Meeting',
    agenda_dialog_title: 'Regional Budget 2026 Public Dialog',
    agenda_smart_city_title: 'Smart City Medan Program Launch',
    meeting_type: 'Meeting',
    public_dialog_type: 'Public Dialog',
    public_event_type: 'Public Event',
    officials_participants: 'Department Heads & Mayor',
    public_officials_participants: 'Public & Officials',
    all_citizens_participants: 'All Citizens',
    transparency_badge: 'Public Transparency',
    transparency_title_1: 'We Are',
    transparency_title_2: 'Accountable',
    transparency_desc: 'Transparency and accountability in every aspect of governance',
    transparency_features: 'Trusted • Open • Accountable',
    financial_report: 'Financial Report',
    financial_desc: 'Regional Budget 2025 and budget realization',
    budget_2025: 'Budget 2025',
    budget_desc: 'Development fund allocation',
    e_report: 'e-REPORT',
    e_report_desc: 'Citizen complaints and aspirations',
    open_data: 'Open Data',
    open_data_desc: 'Access to public data and statistics',
    total_budget: 'Total Budget',
    development: 'Development',
    reports_received: 'Reports Received',
    datasets: 'Datasets',
    progress: 'Progress',
    portal_title: 'Real-time Transparency Portal',
    portal_desc: 'Access all government data and reports in one interactive dashboard',
    budget_distributed: 'Budget Distributed',
    projects_completed: 'Projects Completed',
    transparency_score: 'Transparency Score',
    access_portal: 'Access Transparency Portal',
    testimonials_title: 'Citizen Testimonials and Aspirations',
    testimonials_desc: 'Citizen voice is our priority. Here are their experiences with Medan City Government services',
    testimonials_cta_1: 'Write Testimonial',
    testimonials_cta_2: 'Share Aspiration',
    testimonials_question: 'Want to share your experience?',
    priority_important: 'Important',
    priority_info: 'Info',
    category_education: 'Education',
    category_technology: 'Technology',
    category_culture: 'Culture',
    popular_label: 'Popular',
    accessibility: 'Accessibility',
    text_size: 'Text Size',
    display_mode: 'Display Mode',
    light: 'Light',
    dark: 'Dark',
    language: 'Language',
    disability_support: 'Disability Support',
    access_guide: 'Access Guide',
    contact_us: 'Contact Us',
    main_services: 'Main Services',
    information: 'Information',
    transparency: 'Transparency',
    social_media: 'Social Media',
    privacy_policy: 'Privacy Policy',
    terms_conditions: 'Terms & Conditions',
    sitemap: 'Site Map',
    copyright: '2025 Medan City Government. All rights reserved.',
    fab_whatsapp: 'WhatsApp',
    fab_report: 'Report Issue',
    fab_call_center: 'Call Center',
    modal_close: 'Close',
    modal_start_service: 'Launch Online Service',
    modal_requirements: '100% digital integrated workflow with instant tracking number.',
    modal_online_status: 'Available Online Now',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    search_suggestions: [
      'ID Card',
      'Tax',
      'Business Permit',
      'Certificate',
      'Family Card',
      'Marriage',
      'Assistance',
      'Report',
    ],
    footer_services_list: [
      'ID Card & Family Card',
      'Business Permit',
      'Regional Tax',
      'Online Complaints',
      'Health Services',
      'Education',
    ],
    footer_info_list: [
      'Latest News',
      'Announcements',
      'Event Agenda',
      'Medan Profile',
      'Organizational Structure',
      'Medan History',
    ],
    footer_transparency_list: [
      'Financial Report',
      'Regional Budget 2025',
      'Open Data',
      'e-Report',
    ],
    testimonials_list: [
      {
        name: 'Budi Santoso',
        role: 'West Medan Resident',
        rating: 5,
        comment: 'I processed my business permit in just 10 minutes, awesome! Fast service and very helpful staff.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Siti Nurhaliza',
        role: 'Homemaker',
        rating: 5,
        comment: 'The e-LAPOR app is really helpful for reporting neighborhood issues. Fast response and accurate solutions.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6c7ad7c?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Ahmad Rahman',
        role: 'Local Entrepreneur',
        rating: 4,
        comment: 'Renewing business licenses is now much easier online. No need to wait in long queues like before.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Maria Simbolon',
        role: 'University Student',
        rating: 5,
        comment: 'ID card issuance for students has been made so easy. Thank you Medan City Government!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Ridho Tarigan',
        role: 'Retiree',
        rating: 5,
        comment: 'The free healthcare program for seniors is very helpful. Friendly staff and complete facilities.',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Linda Wijaya',
        role: 'Private Sector Employee',
        rating: 4,
        comment: 'The new website is more user-friendly and comprehensive. Easy to find the services I need.',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      },
    ],
  },
  id: {
    loading_title: 'Pemkot Medan',
    loading_subtitle: 'Mempersiapkan layanan terbaik untuk Anda...',
    search_placeholder: 'Cari layanan...',
    login: 'Masuk',
    home: 'Home',
    services: 'Layanan',
    news: 'Berita',
    data: 'Data',
    info: 'Info',
    documents: 'Dokumen',
    permits: 'Perizinan',
    tax: 'Pajak',
    complaints: 'Pengaduan',
    hero_badge: 'Portal Resmi Pemerintah Kota Medan',
    hero_title_1: 'Layanan Digital',
    hero_title_2: 'Kota Medan',
    hero_description: 'Platform terpadu untuk mengakses seluruh layanan pemerintahan',
    hero_features: 'Efisien • Transparan • Terpercaya',
    hero_cta_primary: 'Mulai Layanan',
    hero_cta_secondary: 'Bantuan 24/7',
    hero_main_services: 'Layanan Utama',
    hero_services_desc: 'Akses cepat ke layanan yang paling sering digunakan',
    service_population: 'Dokumen Kependudukan',
    service_population_desc: 'e-KTP, KK, Akta',
    service_population_long_desc: 'e-KTP, KK, Akta, Birth & Death Certificate',
    service_tax_payment: 'Pembayaran Pajak',
    service_tax_desc: 'PBB, Kendaraan',
    service_tax_long_desc: 'PBB, Kendaraan, Regional Tax',
    service_business_permit: 'Perizinan Usaha',
    service_business_desc: 'SIUP, TDP, NIB',
    service_business_long_desc: 'SIUP, TDP, NIB, Disturbance Permit',
    service_support: 'Bantuan & Dukungan',
    service_support_desc: 'Call Center 24/7',
    service_complaints_long_desc: 'Reports, Complaints & Aspirations',
    service_health: 'Layanan Kesehatan',
    service_health_desc: 'Info RS, Puskesmas, Faskes',
    trust_security: 'Keamanan Data',
    trust_security_desc: 'Terjamin',
    trust_speed: 'Proses Cepat',
    trust_speed_desc: '< 15 menit',
    trust_ease: 'Mudah Digunakan',
    trust_ease_desc: 'User friendly',
    quick_access_badge: 'Layanan Prioritas',
    quick_access_title: 'Akses Cepat Layanan Digital',
    quick_access_desc: 'Pilih layanan yang Anda butuhkan untuk mendapatkan bantuan dengan cepat dan efisien',
    start_now: 'Mulai Sekarang',
    estimated_time: 'Est.',
    completed_today: 'hari ini',
    services_completed: 'Layanan Selesai',
    services_completed_sub: 'Bulan ini',
    average_response: 'Rata-rata Respon',
    average_response_val: '2.3 menit',
    average_response_sub: 'Real-time',
    satisfaction_rate: 'Kepuasan Warga',
    satisfaction_rate_sub: 'Rating',
    online_services: 'Layanan Online',
    online_services_sub: 'Non-stop',
    est_10_min: '10 menit',
    est_5_min: '5 menit',
    est_1_day: '1 hari',
    est_24_hours: '24 jam',
    est_realtime: 'Realtime',
    persona_title: 'Kamu Warga, Kami Bantu',
    persona_desc: 'Layanan yang disesuaikan dengan kebutuhan spesifik setiap kelompok masyarakat',
    persona_student: 'Mahasiswa',
    persona_family: 'Keluarga',
    persona_elderly: 'Lansia',
    persona_business: 'Pemilik Usaha',
    student_domicile: 'Surat Keterangan Domisili',
    student_legalization: 'Legalisir Dokumen',
    student_poor_certificate: 'Surat Keterangan Tidak Mampu',
    student_scholarship: 'Beasiswa Daerah',
    family_birth_cert: 'Akta Kelahiran',
    family_card: 'Kartu Keluarga',
    family_marriage: 'Surat Nikah',
    family_health: 'Layanan Kesehatan',
    elderly_social_aid: 'Bantuan Sosial',
    elderly_free_health: 'Layanan Kesehatan Gratis',
    elderly_active_program: 'Program Lansia Aktif',
    elderly_consultation: 'Konsultasi Medis',
    business_siup_tdp: 'SIUP & TDP',
    business_permit: 'Izin Gangguan (HO)',
    business_ads_permit: 'Izin Reklame',
    business_tax: 'Pajak Restoran & Hotel',
    news_title: 'Apa yang Baru di Kota Medan?',
    news_desc: 'Tetap update dengan berita terbaru dan pengumuman penting dari Pemerintah Kota Medan',
    news_tab: '📰 Berita',
    announcements_tab: '📢 Pengumuman',
    news_scholarship_title: 'Pembukaan Pendaftaran Program Beasiswa Kota Medan 2025',
    news_scholarship_desc: 'Pemerintah Kota Medan membuka pendaftaran beasiswa untuk siswa berprestasi...',
    news_app_title: 'Launching Aplikasi Mobile Layanan Publik Digital',
    news_app_desc: 'Aplikasi baru memudahkan warga mengakses layanan publik melalui smartphone...',
    news_festival_title: 'Festival Budaya Medan 2025 Segera Dimulai',
    news_festival_desc: 'Rayakan keberagaman budaya Medan dalam festival tahunan yang meriah...',
    announce_holiday_title: 'Pengumuman Libur Nasional Hari Raya Idul Adha',
    announce_holiday_desc: 'Pelayanan publik akan tutup pada tanggal 17 Juni 2025...',
    announce_infrastructure_title: 'Perbaikan Infrastruktur Jalan Protokol',
    announce_infrastructure_desc: 'Pembangunan flyover dan pelebaran jalan akan dimulai minggu depan...',
    announce_health_title: 'Pembukaan Fasilitas Kesehatan Baru di Medan Timur',
    announce_health_desc: 'Puskesmas baru siap melayani masyarakat dengan fasilitas modern...',
    agenda_title: 'Agenda Pemkot',
    agenda_desc: 'Transparansi kegiatan pemerintahan untuk membangun kepercayaan publik',
    view_all_agenda: 'Lihat Semua Agenda',
    agenda_month: 'Juni 2025',
    agenda_today: 'Hari ini',
    agenda_has_event: 'Ada agenda',
    agenda_meeting_title: 'Rapat Koordinasi Pembangunan Infrastruktur',
    agenda_dialog_title: 'Dialog Publik Anggaran Daerah 2026',
    agenda_smart_city_title: 'Launching Program Smart City Medan',
    meeting_type: 'Rapat',
    public_dialog_type: 'Dialog Publik',
    public_event_type: 'Acara Publik',
    officials_participants: 'Kepala Dinas & Walikota',
    public_officials_participants: 'Masyarakat & Pejabat',
    all_citizens_participants: 'Seluruh Warga',
    transparency_badge: 'Transparansi Publik',
    transparency_title_1: 'Kami',
    transparency_title_2: 'Bertanggung Jawab',
    transparency_desc: 'Transparansi dan akuntabilitas dalam setiap aspek pemerintahan',
    transparency_features: 'Terpercaya • Terbuka • Akuntabel',
    financial_report: 'Laporan Keuangan',
    financial_desc: 'APBD 2025 dan realisasi anggaran',
    budget_2025: 'Anggaran 2025',
    budget_desc: 'Alokasi dana pembangunan',
    e_report: 'e-LAPOR',
    e_report_desc: 'Pengaduan dan aspirasi warga',
    open_data: 'Data Terbuka',
    open_data_desc: 'Akses data publik dan statistik',
    total_budget: 'Total Anggaran',
    development: 'Pembangunan',
    reports_received: 'Laporan Masuk',
    datasets: 'Dataset',
    progress: 'Progress',
    portal_title: 'Portal Transparansi Real-time',
    portal_desc: 'Akses semua data dan laporan pemerintahan dalam satu dashboard interaktif',
    budget_distributed: 'Anggaran Tersalur',
    projects_completed: 'Proyek Selesai',
    transparency_score: 'Transparansi Skor',
    access_portal: 'Akses Portal Transparansi',
    testimonials_title: 'Testimoni dan Aspirasi Warga',
    testimonials_desc: 'Suara warga adalah prioritas kami. Berikut pengalaman mereka dengan layanan Pemkot Medan',
    testimonials_cta_1: 'Tulis Testimoni',
    testimonials_cta_2: 'Sampaikan Aspirasi',
    testimonials_question: 'Ingin berbagi pengalaman Anda?',
    priority_important: 'Penting',
    priority_info: 'Info',
    category_education: 'Pendidikan',
    category_technology: 'Teknologi',
    category_culture: 'Budaya',
    popular_label: 'Populer',
    accessibility: 'Aksesibilitas',
    text_size: 'Ukuran Teks',
    display_mode: 'Mode Tampilan',
    light: 'Terang',
    dark: 'Gelap',
    language: 'Bahasa',
    disability_support: 'Dukungan Difabel',
    access_guide: 'Panduan Akses',
    contact_us: 'Kontak Kami',
    main_services: 'Layanan Utama',
    information: 'Informasi',
    transparency: 'Transparansi',
    social_media: 'Media Sosial',
    privacy_policy: 'Kebijakan Privasi',
    terms_conditions: 'Syarat & Ketentuan',
    sitemap: 'Peta Situs',
    copyright: '2025 Pemerintah Kota Medan. Seluruh hak cipta dilindungi.',
    fab_whatsapp: 'WhatsApp',
    fab_report: 'Lapor Masalah',
    fab_call_center: 'Call Center',
    modal_close: 'Tutup',
    modal_start_service: 'Mulai Layanan Online',
    modal_requirements: 'Layanan digital 100% terintegrasi dengan nomor pelacakan instan.',
    modal_online_status: 'Tersedia Online Sekarang',
    weekdays: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
    search_suggestions: ['KTP', 'Pajak', 'Izin Usaha', 'Akta', 'KK', 'Nikah', 'Bantuan', 'Laporan'],
    footer_services_list: [
      'KTP & Kartu Keluarga',
      'Izin Usaha',
      'Pajak Daerah',
      'Pengaduan Online',
      'Layanan Kesehatan',
      'Pendidikan',
    ],
    footer_info_list: [
      'Berita Terkini',
      'Pengumuman',
      'Agenda Kegiatan',
      'Profil Medan',
      'Struktur Organisasi',
      'Sejarah Medan',
    ],
    footer_transparency_list: ['Laporan Keuangan', 'APBD 2025', 'Data Terbuka', 'e-LAPOR'],
    testimonials_list: [
      {
        name: 'Budi Santoso',
        role: 'Warga Medan Barat',
        rating: 5,
        comment: 'Saya ngurus izin usaha cuma 10 menit, mantap! Pelayanannya cepat dan petugas sangat membantu.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Siti Nurhaliza',
        role: 'Ibu Rumah Tangga',
        rating: 5,
        comment: 'Aplikasi e-LAPOR sangat membantu untuk melaporkan masalah di lingkungan. Respon cepat dan solusinya tepat.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6c7ad7c?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Ahmad Rahman',
        role: 'Pengusaha Lokal',
        rating: 4,
        comment: 'Proses perpanjangan SIUP sekarang lebih mudah online. Tidak perlu antri lama seperti dulu.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Maria Simbolon',
        role: 'Mahasiswa',
        rating: 5,
        comment: 'Pelayanan pembuatan KTP untuk mahasiswa sangat dipermudah. Terima kasih Pemkot Medan!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Ridho Tarigan',
        role: 'Pensiunan',
        rating: 5,
        comment: 'Program kesehatan gratis untuk lansia sangat membantu. Petugas ramah dan fasilitas lengkap.',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      },
      {
        name: 'Linda Wijaya',
        role: 'Pegawai Swasta',
        rating: 4,
        comment: 'Website baru lebih user-friendly dan informasinya lengkap. Mudah mencari layanan yang dibutuhkan.',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      },
    ],
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  cycleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && ['pt', 'en', 'id'].includes(saved)) {
      setLanguageState(saved);
    } else {
      setLanguageState('pt');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  }, [language]);

  const setLanguage = (nextLang: Language) => {
    if (!document.startViewTransition) {
      setLanguageState(nextLang);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => {
        setLanguageState(nextLang);
      });
    });
  };

  const cycleLanguage = () => {
    const order: Language[] = ['pt', 'en', 'id'];
    const nextIdx = (order.indexOf(language) + 1) % order.length;
    setLanguage(order[nextIdx]);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        cycleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

