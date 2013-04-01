# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130327161920) do

  create_table "igroups", :force => true do |t|
    t.integer  "select_count"
    t.boolean  "active"
    t.integer  "plugins"
    t.string   "create_man"
    t.string   "update_man"
    t.text     "content"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.string   "title"
  end

  create_table "imenus", :force => true do |t|
    t.integer  "a_attr"
    t.integer  "li_attr"
    t.string   "title"
    t.integer  "children"
    t.integer  "data"
    t.text     "content"
    t.string   "version"
    t.string   "create_man"
    t.string   "edit_man"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "irobotuis", :force => true do |t|
    t.string   "themesid"
    t.integer  "menuid"
    t.integer  "userid"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "man_menus", :force => true do |t|
    t.integer  "user"
    t.integer  "menu"
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "select_count"
    t.boolean  "active"
    t.integer  "plugins"
    t.string   "create_man"
    t.string   "update_man"
    t.text     "content"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "menuboms", :force => true do |t|
    t.integer  "menu_parent"
    t.integer  "menu_children"
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "select_count"
    t.boolean  "active"
    t.integer  "plugins"
    t.string   "create_man"
    t.string   "update_man"
    t.text     "content"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "posts", :force => true do |t|
    t.string   "title"
    t.text     "body"
    t.boolean  "published"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "user_groups", :force => true do |t|
    t.integer  "user"
    t.integer  "group"
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "select_count"
    t.boolean  "active"
    t.integer  "plugins"
    t.string   "create_man"
    t.string   "update_man"
    t.text     "content"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "user_mores", :force => true do |t|
    t.date     "born"
    t.string   "tel"
    t.string   "fax"
    t.string   "firstname"
    t.string   "lastname"
    t.string   "state"
    t.string   "comefrom"
    t.integer  "select_count"
    t.boolean  "active"
    t.integer  "plugins"
    t.string   "create_man"
    t.string   "update_man"
    t.text     "content"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
