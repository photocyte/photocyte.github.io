Gem::Specification.new do |spec|
  spec.name = "jekyll-theme-hydejack"
  spec.version = "9.2.2"
  spec.authors = ["Florian Klampfer", "Timothy R. Fallon"]
  spec.summary = "Locally maintained Hydejack theme for photocyte.github.io"
  spec.homepage = "https://github.com/photocyte/photocyte.github.io"
  spec.license = "GPL-3.0"
  spec.files = Dir.chdir(__dir__) { Dir["assets/**/*", "_includes/**/*", "_layouts/**/*", "_sass/**/*", "_js/**/*", "scripts/**/*", "licenses/**/*", "UPSTREAM.md", "LICENSE*", "NOTICE*"] }
  spec.required_ruby_version = ">= 3.4"
  spec.add_runtime_dependency "jekyll", "~> 4.4"
  spec.add_runtime_dependency "jekyll-include-cache", "~> 0.3.1"
end
