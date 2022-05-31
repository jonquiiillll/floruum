require "application_system_test_case"

class SortsTest < ApplicationSystemTestCase
  setup do
    @sort = sorts(:one)
  end

  test "visiting the index" do
    visit sorts_url
    assert_selector "h1", text: "Sorts"
  end

  test "creating a Sort" do
    visit sorts_url
    click_on "New Sort"

    fill_in "Description", with: @sort.description
    check "Display in navbar" if @sort.display_in_navbar
    fill_in "Name", with: @sort.name
    click_on "Create Sort"

    assert_text "Sort was successfully created"
    click_on "Back"
  end

  test "updating a Sort" do
    visit sorts_url
    click_on "Edit", match: :first

    fill_in "Description", with: @sort.description
    check "Display in navbar" if @sort.display_in_navbar
    fill_in "Name", with: @sort.name
    click_on "Update Sort"

    assert_text "Sort was successfully updated"
    click_on "Back"
  end

  test "destroying a Sort" do
    visit sorts_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Sort was successfully destroyed"
  end
end
