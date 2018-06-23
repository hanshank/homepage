class Post < ApplicationRecord
  mount_uploader :image, ImageUploader

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

  def self.newest_post
    self.where({ published: true }).where.not(image: nil).order("published_at desc").limit(1)
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
