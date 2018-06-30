class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  validates_presence_of :image

  def post_published?
    if self.published == true
      true
    else
      false
    end
  end

  def update_published_date
    if self.post_published?
      self.update_attributes(published_at: DateTime.now)
    end
  end

  def self.get_newest_post
    self.where({ published: true }).where.not(image: nil).order("published_at desc").limit(1)
    self
  end

  def self.newest_post(param)
    @newest_post = (self.where({ published: true }).where.not(image: nil).order("published_at desc").limit(1)).pluck(param).join
    self
  end

  def self.newest_post2(param)
    @newest_post = (self.where({ published: true }).where.not(image: nil).order("published_at desc").limit(1)).pluck(param).join
  end

  def self.published
    published = []
    self.all.each do |post|
      if post.published == true
        published.push(post)
      end
    end
    return published
  end

  def self.excerpt
    variable = @newest_post.truncate(340, separator: /\W/).remove("<div>")
    variable.nil? ? nil : variable.chomp(',.:();-')
    variable
  end

  def self.summary
    self.upcase
  end

  def self.image
    image = []
    self.all.each do |post|
      if (post.published == true) && (post.image != nil)
        image.push(post)
      end
    end
    return image
  end

  self.image
end
