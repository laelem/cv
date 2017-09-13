require 'sinatra'
require 'i18n'
require 'i18n/backend/fallbacks'

configure do
  I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)
  I18n.load_path = Dir[File.join(settings.root, 'locales', '*.yml')]
  I18n.backend.load_translations
  I18n.enforce_available_locales = false
  I18n.default_locale = :fr
end

set :haml, format: :html5

before do
  @skills = YAML.load_file('data/skills.yml')
  @config = YAML.load_file('config.yml')
  @config['last_update'] = "13/09/2017"
end

get '/' do
  haml :index
end

get '/:locale' do
  I18n.locale = params[:locale]
  haml :index
end
