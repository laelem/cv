require 'sinatra'
require 'i18n'
require 'i18n/backend/fallbacks'

configure do
  I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)
  I18n.load_path = Dir[File.join(settings.root, 'locales', '*.yml')]
  I18n.backend.load_translations
  I18n.default_locale = :fr
  I18n.enforce_available_locales = false
end

set :haml, format: :html5
set :root, './'

before do
  @skills = YAML.load_file('data/skills.yml')
  @config = YAML.load_file('config.yml')
  @config['last_update'] = File.stat(".").mtime.strftime("%d/%m/%Y")
end

get '/' do
  haml :index
end

get '/:locale' do
  I18n.locale = params[:locale]
  haml :index
end
