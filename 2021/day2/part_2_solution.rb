def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

file_name = "input.txt"
arr = read_file(file_name).split("\n")
depth = 0
aim = 0
horizontal = 0
arr.each do |move|
  change = move.split(" ")
  val = change[1].to_i
  case change[0]
    when 'down'
      aim += val
    when 'up'
      aim -= val
    when 'forward'
      horizontal += val
      depth += aim * val
  end
end
puts horizontal * depth