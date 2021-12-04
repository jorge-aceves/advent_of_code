def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

def sanitize_matrix(matrix)
  new_matrix = []
  matrix.each do |row|
    new_row = row.strip().squeeze(" ").split(" ").map(&:to_i)
    new_matrix.push(new_row)
  end
  new_matrix
end

def columns_to_rows(matrix)
  rows = []
  for i in 0...matrix[0].size do
    row = []
    for j in 0...matrix.size do
      row.push(matrix[j][i])
    end
    rows.push(row)
  end
  rows
end

file_name = "input.txt"
arr = read_file(file_name).split("\n").select{|l| l.size > 0}
nums = arr.shift.split(",").map(&:to_i)
num_order = {}
nums.each_with_index { |n, i| num_order[n.to_i] = i }

card_results = []

until arr.size == 0 do
  card = arr.shift(5)
  card = sanitize_matrix(card)
  rows = card
  rows += columns_to_rows(card)
  card_min = nums.size
  card_win_num = 0
  rows.each do |row|
    max = 0
    best_num = -1
    row.each do |n|
      call = num_order[n]
      if call > max
        max = call
        best_num = n
      end
    end
    if max < card_min
      card_min = max
      card_win_num = best_num
    end
  end
  card_results.push([card_min, card_win_num, card])
end


max = 0
winning_num = 0
winning_card = []
card_results.each do |result|
  if result[0] > max
    max = result[0]
    winning_num = result[1]
    winning_card = result[2]
  end
end

unmarked_nums = 0
winning_card.each do |row|
  row.select {|n| num_order[n] > max}.each{|n| unmarked_nums += n}
end

p unmarked_nums * winning_num