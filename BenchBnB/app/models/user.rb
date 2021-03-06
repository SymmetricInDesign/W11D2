class User < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    validates :password_digest, presence: true
    # validates :password, allow_nil: true
    
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        end
        return nil
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        return self.session_token
    end

    def password
        @password
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password) 
    end

    private

    def generate_session_token
        SecureRandom::urlsafe_base64
    end


end
